const User = require('../Models/User');
const Bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const expressHandler = require('express-async-handler');
const sendMail = require('../utilities/email');

// Token generation function
const generateToken = (id) => {
    return JWT.sign({ userId: id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
}

// Registration controller
const RegisterController = expressHandler(async (req, res) => {
    const { fullName, email, password, confirmpassword } = req.body;

    // Validations
    if (!fullName || !email || !password || !confirmpassword) {
        return res.status(400).json('All fields must be filled');
    }
    if (password.length < 8) {
        return res.status(400).json('Password must not be less than 8 characters');
    }
    if (password !== confirmpassword) {
        return res.status(400).json('Password does not match confirm password');
    }

    // Check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(400).json('User already exists');
    }

    // Hash password
    const salt = Bcrypt.genSaltSync(10);
    const HashedPassword = Bcrypt.hashSync(password, salt);

    // Create user
    const createdUser = await User.create({
        fullName,
        email,
        password: HashedPassword
    });

    const body = `Welcome ${createdUser.fullName}, thank you for registering with us.`;
    sendMail(createdUser.email, 'Register', body);

    const token = generateToken(createdUser._id);
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "none",
        secure: true,
    });

    if (createdUser) {
        const { fullName, email } = createdUser;
        return res.status(200).json({
            fullName, email, token
        });
    } else {
        res.status(500).json('User could not be created');
    }
});

// Login controller
const LoginController = expressHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json('Fields cannot be empty');
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
        return res.status(400).json('User is not registered, kindly register');
    }

    const passwordIsCorrect = Bcrypt.compareSync(password, userExist.password);
    if (userExist && passwordIsCorrect) {
        const { _id, email, fullName } = userExist;
        const token = generateToken(_id);

        return res.status(200).json({
            _id, email, fullName, token
        });
    } else {
        return res.status(400).json('Invalid credentials');
    }
});

// Get single user
const getSingeUser = expressHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400).json('User not found');
        }
        return res.status(200).json(userExist);
    } catch (error) {
        return res.status(400).json(error.message);
    }
});

// Get all users
const getAll = expressHandler(async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

// Forgot password
const forgotPassword = expressHandler(async (req, res) => {
    const { email } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json('Email not valid');
        }

        const token = generateToken(userExist._id);
        const frontendUrl = 'http://localhost:8000';
        const passwordLink = `${frontendUrl}/reset-password?token=${token}`;
        const body = `<p>Dear user, kindly click the link below to reset your password:</p><p>${passwordLink}</p>`;
        sendMail(email, 'Forgot Password', body);

        return res.status(200).json('Password reset link sent to email');
    } catch (error) {
        return res.status(500).json(error.message);
    }
});

module.exports = {
    RegisterController,
    LoginController,
    getSingeUser,
    getAll,
    forgotPassword
};
