
const express=require("express");

const devcompanyController=require("../controller/devcompanyController")
const CAcompanyController = require("../controller/CAcompanyController")
const bankregController=require("../controller/bankregController")


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








module.exports=router
