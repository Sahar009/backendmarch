const express = require('express')
const router= express.Router()
const {createProduct, getAllProduct, deleteSingleProduct,getSingleProduct, updateProduct} = require('../controllers/productController')


router.post('/create',createProduct)
router.get('/getall',getAllProduct)
router.delete('/delete/:id',deleteSingleProduct)
router.get('/getone/:id',getSingleProduct)
router.patch('/update/:id',updateProduct)
// router.put('update',)

module.exports= router