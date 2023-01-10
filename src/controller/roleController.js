const roleModel = require("../models/roleModel")
const createRole=async function(req,res){
    try {
        const data=req.body
        const{name,role,bankId}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }
        if(!name){
            return res.status(404).send({ status: false, message: "name must be in body" })
        }
        if(!role){
            return res.status(404).send({ status: false, message: "role must be in body" })
        }
        if(!bankId){
            return res.status(404).send({ status: false, message: "bankId must be in body" })
        }
        //---------------------------creating role---------------------------
        const createRole = await roleModel.create(data);
        res.status(201).send({ status: true, message: createRole })


    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
// Final data Updation
const updateRole=async function(req,res){
    try{
        let roleid=req.params.roleid
        let body=req.body
        
        const updateDetails = await roleModel.findOneAndUpdate({_id:roleid}, body, { new: true })
     return res.status(200).send({ status: true, message: " role update successfully ", data: updateDetails });
}catch(error){
    res.status(500).send({ status: false, message: error.message })
}
}
//for role deletion
const deleteRole=async function(req,res){
    try {
        let roleid=req.params.roleid
        let body=req.body
        const deleteRole=await roleModel.updateOne({_id:roleid},body,{isDeleted:true})
        return res.status(200).send({ status: true, message: " role delete successfully ", data: deleteRole });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


module.exports={createRole,updateRole,deleteRole}