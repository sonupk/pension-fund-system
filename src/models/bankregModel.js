const mongoose=require('mongoose')
const bankregcompanySchema=new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true
    },
    
    email: {
        type:String,
        required:true,
        unique:true
    },
    contactPersonName: {
        type:String,
        required:true
    },
    contactPersonNumber: {
        type:String,
        required:true
    },
    numberOfEmployees: { min: Number, max: Number },
    addressLine1: {
        type:String,
        required:true
    },
    addressLine2: {
        type:String,
        required:true
    },
    pinCode: {
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    district: {
        type:String,
        required:true,
        trim:true
    },
    state: {
        type:String,
        required:true,
        trim:true
    },
    
},{timestmaps:true})
module.exports=mongoose.model("bankregcompany",bankregcompanySchema)
