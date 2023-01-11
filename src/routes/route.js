
const express=require("express");

const devcompanyController=require("../controller/devcompanyController")
const CAcompanyController = require("../controller/CAcompanyController")
const bankregController=require("../controller/bankregController")
const roleController=require("../controller/roleController")
const designationController=require("../controller/designationController")
const userController=require("../controller/userController")


const router=express.Router()
//-------------------------------- development company----------------------
router.post('/createdevcompany',devcompanyController.createdevcompany)
router.get('/getalldevcompany',devcompanyController.getalldevcompany)
router.put('/updatedevcompany/:devcompanyid',devcompanyController.updatedevcompany)
router.delete('/deletedevcompany/:devcompanyid',devcompanyController.deletedevcompany)


//------------------------------------CA account--------------------------------
router.post('/createCAcompany',CAcompanyController.createCAcompany)
router.get('/getallCAcompany',CAcompanyController.getallCAcompany)
router.put('/updateCAcompany/:CAcompanyid',CAcompanyController.updateCAcompany)
router.delete('/deleteCAcompany/:CAcompanyid',CAcompanyController.deleteCAcompany)


//-------------------------------bank registration-------------------
router.post('/createbankreg',bankregController.createbankreg)
router.get('/allbankreg',bankregController.allbankreg)
router.put('/updatebankreg/:bankregid',bankregController.updatebankreg)
router.delete('/deletebankreg/:bankregid',bankregController.deletebankreg)

//--------------------------------role----------------------------------
router.post('/createRole',roleController.createRole)
router.get('/getallrole',roleController.getallrole)
router.put('/updateRole/:roleid',roleController.updateRole)
router.delete('/deleteRole/:roleid',roleController.deleteRole)

//------------------------------designation---------------------
router.post('/createDesignation',designationController.createDesignation)
router.get('/getalldesignation',designationController.getalldesignation)
router.put('/updatedesignation/:designationid',designationController.updatedesignation)
router.delete('/deletedesignation/:designationid',designationController.deletedesignation)


//----------------------------create user and user login---------------------------
router.post('/createUser',userController.createUser)
router.post('/login',userController.userLogin)






module.exports=router
