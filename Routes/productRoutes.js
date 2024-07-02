const express = require('express')
const router= express.Router()
const {createProduct} = require('../controllers/productController')


router.post('/create',createProduct)

// router.put('update',)

module.exports= router