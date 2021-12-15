const Location = require("../db/models/Location")



exports.getAllLocations = async (req,res,next)=>{
    try {
        let Locations = await Location.find({},{_id:0})
        res.status(200).json({error:false,data:Locations})
        
    } catch (error) {
        res.status(400).json({error:true, message: error.message})
    }
}

exports.getLocation = async (req,res,next)=>{
    let {name} = req.body
    try {
        let user = await Location.findOne({name},"name type dimention").exec()
        if (!user) res.status(406).json({error:true,message:"No se encontro la locacion"})
        res.status(400).json({error:false,data:user})
    } catch (error) {
        res.status(404).json({error:true,message:error.message})
    }
}   


exports.deleteLocation = async(req,res,next)=>{
    let {name} = req.body
    try{
        await Location.findOneAndDelete({name})
        this.getAllLocations
    }catch(error){
        res.status(404).json({error:true,message:error.message})
    }

}


exports.updateLocation = async (req,res,next)=>{
    let {name,type,dimention} = req.body
    try {
        await Location.findOneAndUpdate({name},{
            name,
            type,
            dimention
        })
        this.getAllLocations
    } catch (error) {
        res.status(404).json({error:true,message:error.message})
    }
}

exports.createLocation = async (req,res,next)=>{
    let {name,type,dimention} = req.body
    try {
        let newLocation = new Location({name,type,dimention})
        await newLocation.save()
        this.getAllLocations
    } catch (error) {
        res.status(400).json({error:true,message:error.message})
    }
}