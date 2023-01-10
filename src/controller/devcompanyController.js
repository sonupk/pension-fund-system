
const devcompanyModel = require("../models/devcompanyModel")

const validator = require("../validations/validator")

const createdevcompany = async function (req, res){
    try {
        const data=req.body
        const{name,email,mobile}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }
        if (!name) {
            return res.status(404).send({ status: false, message: "name must be in body" })
        }
        if (!email) {
            return res.status(404).send({ status: false, message: "email must be in body" })
        }
        if (!validator.isValidEmail(email)) return res.status(400).send({ status: false, message: "Email is invalid" })
        if(!mobile){
            return res.status(404).send({status:false,message:"mobile must be present"})
        }
        if(!validator.isValidMobile(mobile)) return res.status(400).send({ status: false, message: "mobile is invalid" })
        
        //-------------------------creating a development company--------------------------
        const createdevcompany = await devcompanyModel.create(data);
        res.status(201).send({ status: true, message: createdevcompany })

        
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

//------------------------------fetching all data of development company---------------------
const getalldevcompany= async function(req,res){
    try {
        const devComapny=await devcompanyModel.find()
        res.status(200).send({ status: true, data: devComapny })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
module.exports={createdevcompany,getalldevcompany}