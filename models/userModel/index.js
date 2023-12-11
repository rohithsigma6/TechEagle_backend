const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
       
    },
    password:{
        type:String,
        required:true
    },
    address:{
        houseNumber:{
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: String,
            required: true
        }
    },
    role:{
        type:String,
        default:"customer"
    }
},
{
    timestamps:true,
})

module.exports.User = new mongoose.model("User",userSchema)