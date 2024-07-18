// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fullName :{
        type:String,
        required:[true,'full name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minLength:[8,'password must not be less than 8 characters'],
        // match:[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'password must have Minimum eight characters, at least one uppercase letter, one lowercase letter and one number']

    },
    
    // phone:{

    // }
},{
    timestamps:true
})

const User = mongoose.model('user',UserSchema)

module.exports = User