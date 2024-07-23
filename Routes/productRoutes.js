const express = require('express')
const router= express.Router()
const {createProduct, getAllProduct, deleteSingleProduct,getSingleProduct, updateProduct} = require('../controllers/productController')
const { upload } = require('../utilities/fileUploads')


router.post('/create',createProduct)
router.get('/getall',getAllProduct)
router.delete('/delete/:id',deleteSingleProduct)
router.get('/getone/:id',getSingleProduct)
router.patch('/update/:id',updateProduct)
// router.put('update',)

router.post('/test',upload.single('image'),function(req,res){
   console.log(upload.single('image'));
res.send('')
})

module.exports= router