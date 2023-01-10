
const express=require("express");

const devcompanyController=require("../controller/devcompanyController")
const CAcompanyController = require("../controller/CAcompanyController")
const bankregController=require("../controller/bankregController")
const roleController=require("../controller/roleController")
const designationController=require("../controller/designationController")
const userController=require("../controller/userController")


const router=express.Router()
//------------------------post api for creating development company----------------------
router.post('/createdevcompany',devcompanyController.createdevcompany)
//-----------------------post api for creating CA account--------------------------------
router.post('/createCAcompany',CAcompanyController.createCAcompany)
//-------------------------------post api for create bank registration-------------------
router.post('/createbankreg',bankregController.createbankreg)
//------------------------get api for fetching bank registration-------------------------
router.get('/allbankreg',bankregController.allbankreg)
//------------------------get api for fetching all CA company----------------------------
router.get('/getallCAcompany',CAcompanyController.getallCAcompany)
//------------------------get api for fetching all development company-------------------
router.get('/getalldevcompany',devcompanyController.getalldevcompany)
//-------------------------updating details-------------------------------------
router.put('/updatebankreg/:bankregid',bankregController.updatebankreg)
//------------------------deleting bank reg---------------------------------
router.delete('/deletebankreg/:bankregid',bankregController.deletebankreg)
//------------------------------creating role-------------------------------
router.post('/createRole',roleController.createRole)
//--------------------------craeting designation-----------------
router.post('/createDesignation',designationController.createDesignation)
//----------------------------create user---------------------------
router.post('/createUser',userController.createUser)
//-----------------------------user login------------------------
router.post('/login',userController.userLogin)
//-------------------------------update role---------------------------
router.put('/updateRole/:roleid',roleController.updateRole)
//----------------------------delete role----------------------
router.delete('/deleteRole/:roleid',roleController.deleteRole)








module.exports=router
