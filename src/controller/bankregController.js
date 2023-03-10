const bankregModel = require("../models/bankregModel")
const validator = require("../validations/validator")

const createbankreg = async function (req, res){
    try {
        const data=req.body
        const{name,email,contactPersonName,contactPersonNumber,numberOfEmployees,addressLine1,addressLine2,pinCode,city,district,state}=data

        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }
        if (!name) {
            return res.status(404).send({ status: false, message: "name must be in body" })
        }
        if (!email) {
            return res.status(404).send({ status: false, message: "email must be in body" })

        }
        const isEmailUnique=await bankregModel.findOne({email})
        if (isEmailUnique) {
            return res.status(400).send({ status: false, message: `email: ${email} already exist` });
          }
        if (!validator.isValidEmail(email)) return res.status(400).send({ status: false, message: "Email is invalid" })

        if(!contactPersonName){
            return res.status(404).send({ status: false, message: "contactPersonname must be in body" })

        }
        if(!contactPersonNumber){
            return res.status(404).send({ status: false, message: "contactPersonNumber must be in body" })

        }
        if (!validator.isValidcontactPersonNumber(contactPersonNumber)) return res.status(400).send({ status: false, message: "contactPersonNumber is invalid" })
        if(!numberOfEmployees){
            return res.status(404).send({ status: false, message: "numberOfEmployees must be in body" })

        }
        if(!addressLine1){
            return res.status(404).send({ status: false, message: "addressLine1 must be in body" })

        }
        if(!addressLine2){
            return res.status(404).send({ status: false, message: "addressLine2 must be in body" })

        }
        if(!pinCode){
            return res.status(404).send({ status: false, message: "pinCode must be in body" })

        }
        if (!validator.isValidPinCode(pinCode)) return res.status(400).send({ status: false, message: "pinCode is invalid" })
        
        if(!city){
            return res.status(404).send({ status: false, message: "city must be in body" })
        }
        if(!district){
            return res.status(404).send({ status: false, message: "district must be in body" })
        }
        if(!state){
            return res.status(404).send({ status: false, message: "state must be in body" })
        }
        
        
//---------------------------creating bank registartion---------------------------
        const createbankreg = await bankregModel.create(data);
        res.status(201).send({ status: true, message: createbankreg })

 } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

//----------------------fetching data of bank registartions-------------------------
const allbankreg=async function (req,res){
    try {
        const banks=await bankregModel.find()
        res.status(200).send({ status: true, data: banks })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

// ------------------------- data Updation of bank reg-------------------------------
const updatebankreg=async function(req,res){
    try{
        let bankregid=req.params.bankregid
        let body=req.body
        
        const updateDetails = await bankregModel.findOneAndUpdate({_id:bankregid}, body, { new: true })
     return res.status(200).send({ status: true, message: " bankreg update successfully ", data: updateDetails });
}catch(error){
    res.status(500).send({ status: false, message: error.message })
}
}

//-----------------------for data deletion of bank reg
const deletebankreg=async function(req,res){
    try {
        let bankregid=req.params.bankregid
        let body=req.body
        const deletebankreg=await bankregModel.updateOne({_id:bankregid},body,{isDeleted:true})
        return res.status(200).send({ status: true, message: " bankreg delete successfully ", data: deletebankreg });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
module.exports={createbankreg,allbankreg,updatebankreg,deletebankreg}