
const express=require("express");

const devcompanyController=require("../controller/devcompanyController")
const CAcompanyController = require("../controller/CAcompanyController")
const bankregController=require("../controller/bankregController")


const router=express.Router()

router.post('/createdevcompany',devcompanyController.createdevcompany)
router.post('/createCAcompany',CAcompanyController.createCAcompany)
router.post('/createbankreg',bankregController.createbankreg)
router.get('/allbankreg',bankregController.allbankreg)
router.get('/getallCAcompany',CAcompanyController.getallCAcompany)
router.get('/getalldevcompany',devcompanyController.getalldevcompany)








module.exports=router
