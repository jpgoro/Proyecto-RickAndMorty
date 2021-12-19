const express = require("express")
const RouterPriv = express.Router()
const {getPrivateData} = require("../controllers/privatecontrollers")
const {protect} = require("../middlewares/auth")
RouterPriv.get("/",protect,getPrivateData)


module.exports = RouterPriv