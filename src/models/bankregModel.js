const mongoose=require('mongoose')
const bankregcompanySchema=new mongoose.Schema({
    name: String,
    type: String,
    email: String,
    contactPersonName: String,
    contactPersonNumber: String,
    numberOfEmployees: { min: Number, max: Number },
    addressLine1: String,
    addressLine2: String,
    pinCode: Number,
    city: String,
    district: String,
    state: String
})
module.exports=mongoose.model("bankregcompany",bankregcompanySchema)
