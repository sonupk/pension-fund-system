const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

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
    bankId:{ 
        type: ObjectId, 
        ref: 'bankreg', 
        required: true, 
        trim: true 
    },

    // admin: {
    //     type:Boolean,
    //     default:false
    // },
    
},{timestamps:true})
module.exports=mongoose.model("user",userSchema)
// // ------------------------------Can't Set deleted true at creation time------------------------------
// if (isDeleted == true) return res.status(400).send({ status: false, message: "You can't add this key at creation time." })
