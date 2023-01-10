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
        //---------------------------creating role---------------------------
        const createDesignation = await designationModel.create(data);
        res.status(201).send({ status: true, message: createDesignation })


    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
module.exports={createDesignation}