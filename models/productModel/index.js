const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true,
        min:0
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    availability:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports.Product = new mongoose.model("Product",productSchema)
