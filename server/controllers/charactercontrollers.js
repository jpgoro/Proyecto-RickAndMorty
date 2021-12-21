const Character = require("../db/models/Character")



exports.getAllCharacters = async (req,res,next)=>{
    try {
        let characters = await Character.find({})
        res.status(200).json({error:false,data:characters})
    } catch (error) {
        res.status(400).json({error:true, message: error.message})
    }
}

exports.getCharacter = async (req,res,next)=>{
    let {name} = req.body
    try {
        let user = await Character.findOne({name},"name gender status").exec()
        if (!user) return res.status(406).json({error:true,message:"No se encontro el usuario"})
        res.status(202).json({error:false,data:user})
    } catch (error) {
        res.status(404).json({error:true,message:error.message})
    }
}   


exports.deleteCharacter = async(req,res,next)=>{
    let {name} = req.body
    try{
        let deletedCharacter = await Character.findOneAndDelete({name})
        res.status(202).json({error:false,data:deletedCharacter})
    }catch(error){
        res.status(404).json({error:true,message:error.message})
    }

}


exports.updateCharacter = async (req,res,next)=>{
    let {name,gender,status} = req.body
    try {
        let updatedCharacter = await Character.findOneAndUpdate({name},{
            name,
            gender,
            status
        },{new:true})
        res.status(202).json({error:false,data:updatedCharacter})
    } catch (error) {
        res.status(404).json({error:true,message:error.message})
    }
}

exports.createCharacter = async (req,res,next)=>{
    let {name,gender,status} = req.body
    try {
        let newCharacter = new Character({name,gender,status})
        let newCharacterSave = await newCharacter.save()
        res.status(200).json(newCharacterSave)
    } catch (error) {
        res.status(400).json({error:true,message:error.message})
    }
}