const mongoose=require('mongoose')
const CAcompanySchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true
    },
    mobile: {
        type:String,
        required:true
    },
    admin: {
        type:Boolean,
        default:false
    }
})
module.exports=mongoose.model("CAcompany",CAcompanySchema)
