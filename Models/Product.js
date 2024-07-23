const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'name must be required']
    },
    price:{
        type:String,
        required:[true,'price must be required']

    },
    color:{
        type:String,
        required:[true,'color must be required'],
        default:"as seen in the picture"
    },
    image:{
       type:String,
    }
})

const ProductModel = mongoose.model("product",productSchema)


module.exports = ProductModel