const express = require('express')
const { RegisterController,
    getSingeUser, 
    getAll
 } = require('../controllers/UserController')

const router = express.Router()

router.post('/register',RegisterController)
router.get('/getuser/:id', getSingeUser )
router.get('/users',getAll)
// router.get('/')

module.exports = router

