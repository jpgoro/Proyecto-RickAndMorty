const express = require("express")
const {getAllCharacters,getCharacter,deleteCharacter,updateCharacter,createCharacter}  = require("../controllers/charactercontrollers")
const characterRouter = express.Router()

characterRouter.get("/all",getAllCharacters)

characterRouter.post("/",createCharacter)

characterRouter.get("/one",getCharacter)

characterRouter.put("/",updateCharacter)

characterRouter.delete("/",deleteCharacter)

module.exports = characterRouter


