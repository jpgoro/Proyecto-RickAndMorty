const express = require("express")
const multer = require("multer")
const {getAllCharacters,getCharacter,deleteCharacter,updateCharacter,createCharacter}  = require("../controllers/charactercontrollers")
const characterRouter = express.Router()

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"./server/public/uploads/")
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

characterRouter.get("/all",getAllCharacters)

characterRouter.post("/",createCharacter)

characterRouter.get("/one",getCharacter)

characterRouter.put("/",updateCharacter)

characterRouter.delete("/",deleteCharacter)

module.exports = characterRouter


