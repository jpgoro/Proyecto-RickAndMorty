const User = require("../db/models/User")


exports.getAllUsers = (req,res,next)=>{
    
}

exports.deleteUser =(req,res,next)=>{

}


exports.updateUser = (req,res,next)=>{

}

exports.register = async (req,res)=>{
    let body = req.body
    try{
        const user = new User(body)
        await user.save()
        res.status(201).json({
            error:false,
            user
        })
    }catch(error){
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

exports.login = async (req,res)=>{
    let {email,password} = req.body
    try {
        const user = await User.findOne({email}).select("+password")
        if(!user) res.status(404).json({error:true,message:"No se encontro un usuario"})
        const isMatch = await user.matchPasswords(password)
        if(!isMatch) res.status(404).json({error:true,message:"Invalid Credentials"})
        const token = user.signToken()
        res.status(200).json({error:false,token})
    } catch (error) {
        res.status(505).json({error:true,message:error.message})
    }
}


