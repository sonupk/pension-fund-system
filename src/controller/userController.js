const userModel=require("../models/userModel")
const validator = require("../validations/validator")
const jwt = require("jsonwebtoken")



const createUser = async function (req, res){
    try {
        const data=req.body
        const{name,email,mobile,password}=data
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
        if(!password){
            return res.status(404).send({status:false,message:"password must be present"})
        }
        if (!validator.isValidPassword(password)) return res.status(400).send({ status: false, message: "password is invalid" })



        //------------------------creating a data of user---------------------------
        const createUser = await userModel.create(data);
        res.status(201).send({ status: true, message: createUser })

        } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}
// //___________________________________ USER LOGIN___________________________________
const userLogin = async function (req, res) {
    try {
  
      let data = req.body;
      const{email,password}=data
        if (Object.keys(data).length == 0) {
            return res.status(404).send({ status: false, message: "data must be in body" })
        }

      
      // -------------------------------------Input Value Validation-------------------------------------
      if (!email) {
        return res.status(400).send({ status: false, message: "Please enter the emailId" })
      }
      if (!password){
      return res.status(400).send({ status: false, message: "Please enter the password" })
    }
      // -----------------------------------Validation email & password ----------------------------------------
      if (!validator.isValidEmail(email)) return res.status(400).send({ status: false, message: "Please enter the valid emailId" })
      
      if (!validator.isValidPassword(password)) return res.status(400).send({ status: false, message: "Please enter the valid password" })
      
      
      // --------------------------------------Finding the Email and Password------------------------------
      const loginUser = await userModel.findOne({ email, password });
      if (!loginUser) return res.status(404).send({ status: false, msg: "email and password not found" });
  
      //-----------------------------------token creation part here:-------------------------------------------
      const token = await jwt.sign({
        userId: loginUser._id, iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 20 * 60 * 60
        
      }, "projectfund1");
      
      //------------------------------ Successful Token generated ----------------------------------------
      res.status(200).send({ status: true, msg: "user successfully logged in ", data: { token } })
  
    } catch (err) {
      return res.status(500).send({ status: false, msg: err.message })
    }
  }




module.exports={createUser,userLogin}
