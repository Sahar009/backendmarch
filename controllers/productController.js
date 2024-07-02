const ProductModel = require('../Models/Product')


// create product controller
const createProduct = async(req,res)=>{
const {name,price,color}=req.body


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


}




// get all product controller 


module.exports = {createProduct}
