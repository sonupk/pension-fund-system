const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    mobile: {
        type:String,
        required:true
    },
    admin: {
        type:Boolean,
        default:false
    },
    
},{timestamps:true})
module.exports=mongoose.model("user",userSchema)