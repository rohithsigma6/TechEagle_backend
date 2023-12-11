const express=require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app  = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const connect = ()=>{
    return mongoose.connect("mongodb+srv://rbjuly31:rbjuly31@cluster0.sqjhzk4.mongodb.net/")
}
const userRoutes = require('./models/userModel/routes/routes')
const productRoutes = require('./models/productModel/routes/routes')
const cartRoutes = require('./models/cartModel/routes/routes')
const orderRoutes = require('./models/orderModel/routes/routes')
app.use('/v1',userRoutes)
app.use('/v1',productRoutes)
app.use('/v1',cartRoutes)
app.use('/v1',orderRoutes)
app.listen(1234,()=>{
    connect()
    console.log("Database connected")
})

