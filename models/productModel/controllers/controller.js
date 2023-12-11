const { Product } = require('../index')

module.exports.AddProduct = async (req, res) => {
 
    try {
        const product = await Product.create({...req.body })
        if (!product) {
            return res.json({ success: false, message: "Error updating product" })
        }
        return res.json({ success: true, message: "Product addition successful" })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: err })
    }
}

module.exports.GetAllProducts = async (req, res) => {
 
    try {
        const products = await Product.find()
        if (!products) {
            return res.json({ success: false, message: "Error updating product" })
        }
        return res.json({ success: true, message: "fetched products successful",products:products })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: err })
    }
}

module.exports.GetSingleProduct = async (req, res) => {
 
    try {
        const product = await Product.find({"_id":req.body._id})
        console.log(product)
        if (!product) {
            return res.json({ success: false, message: "Error getting product" })
        }
        return res.json({ success: true, message: "fetched product successfully",product:product })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: err })
    }
}

module.exports.UpdateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        console.log(product)
        if (!product) {
            return res.json({ success: false, message: "Error adding product" })
        }
        return res.json({ success: true, message: "Product updated successful", })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: err })
    }
}

module.exports.DeleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        console.log(product)
        if (!product) {
            return res.json({ success: false, message: "Error deleting product" })
        }
        return res.json({ success: true, message: "Product deleted successful", })
    }
    catch (err) {
        console.log(err)
        return res.json({ success: false, message: err })
    }
}

