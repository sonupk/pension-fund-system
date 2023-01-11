const designationModel = require("../models/designationModel")
const createDesignation=async function(req,res){
    try {
        const data=req.body
        const{name,bankId}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }
        if(!name){
            return res.status(404).send({ status: false, message: "name must be in body" })
        }
        
        if(!bankId){
            return res.status(404).send({ status: false, message: "bankId must be in body" })
        }
        //---------------------------creating designation---------------------------
        const createDesignation = await designationModel.create(data);
        res.status(201).send({ status: true, message: createDesignation })


    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
//----------------------fetching data of designation------------------------------------
const getalldesignation=async function (req,res){
    try {
        const designation=await designationModel.find()
        res.status(200).send({ status: true, data: designation })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
// -----------------------------------data Updation of designation--------------------
const updatedesignation=async function(req,res){
    try{
        let designationid=req.params.designationid
        let body=req.body
        
        const updateDetails = await designationModel.findOneAndUpdate({_id:designationid}, body, { new: true })
     return res.status(200).send({ status: true, message: " designation update successfully ", data: updateDetails });
}catch(error){
    res.status(500).send({ status: false, message: error.message })
}
}
//------------------------------for designation deletion--------------------------------
const deletedesignation=async function(req,res){
    try {
        let designationid=req.params.designationid
        let body=req.body
        const deletedesignation=await designationModel.updateOne({_id:designationid},body,{isDeleted:true})
        return res.status(200).send({ status: true, message: " designation delete successfully ", data: deletedesignation });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}



module.exports={createDesignation,getalldesignation,updatedesignation,deletedesignation}