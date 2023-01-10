const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const roleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    bankId:{ 
        type: ObjectId, 
        ref: 'bankreg', 
        required: true, 
        trim: true 
    },

},{timestamps:true})
module.exports=mongoose.model("role",roleSchema)