const ProductModel = require('../Models/Product')
const cloudinary = require('cloudinary').v2

cloudinary.config({
  
})
// create product controller
const createProduct = async(req,res)=>{
const {name,price,color}=req.body
// console.log(req.file);
try {
    

// validation
if(!name || !price || !color){
    res.status(400).json('fields cannot be empty')
}


const createdProduct= await ProductModel.create({
    name:name,
    price:price,
    color:color
})

if(createdProduct){
const{name,price,color} = createdProduct
    res.status(201).json(
{
    name,
    price,
    color
}
     )
}
else{
    res.status(400).json('error creating product')
}

} catch (error) {
    return(
        res.status(500).json(error.message)
    )
}

}







// get all product controller 

const getAllProduct = async(req, res) =>{
  try {
    const products = await ProductModel.find({})

    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error.message)
  }


}

// delete single products
const deleteSingleProduct = async(req,res) =>{
const {id} = req.params

    try {
       const deletedProduct = await ProductModel.findByIdAndDelete(id)
       res.status(200).json('product successfully deleted')
    } catch (error) {
        res.status(500).json(error.message)
    }
}


// get single product 
const getSingleProduct = async(req,res) =>{

    const {id} = req.params
 try {
    const singleProduct = await ProductModel.findOne({_id:id})
    // const singleProduct = await ProductModel.findById(id)
    res.status(200).json(singleProduct)
 } catch (error) {
    res.status(500).json(error)
 }
}


// update product
// get the product first 
//update product




const updateProduct = async(req,res) =>{
    const {id} = req.params
  try{
    const updateProduct=await ProductModel.findByIdAndUpdate(

        {_id:id},
        req.body,
        {
            runValidators:true,
            new:true
        }
    )
    res.status(201).json(updateProduct)
  }
  catch(error){
    res.status(500).json(error.message)
  }
}
// findByIdAndUpdate()






module.exports = {createProduct,getAllProduct,deleteSingleProduct,getSingleProduct,updateProduct}
