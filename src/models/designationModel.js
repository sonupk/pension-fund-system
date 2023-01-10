const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const designationSchema=new mongoose.Schema({
    name:{
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
module.exports=mongoose.model("designation",designationSchema)