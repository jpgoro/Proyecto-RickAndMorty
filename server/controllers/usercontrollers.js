const User = require("../db/models/User")


exports.getAllUsers = async (req,res,next)=>{
    try{
        let usuarios = await User.find({})
        return res.status(200).json(usuarios)
    }catch(err){
        return res.status(404).json({error:true,message:err.message})
    }

}

exports.deleteUser =(req,res,next)=>{

}


exports.updateUser = async (req,res,next)=>{
    let {email,username} = req.body
    console.log(req.body)
    try{
        let user = await User.findOneAndUpdate({email},{username},{new:true})
        sendToken(user,201,res)
    }catch(err){
        return res.status(404).json({error:true,message:err.message})
    }
}

exports.register = async (req,res)=>{
    let body = req.body
    console.log(req.body)
    try{
        const user = new User(body)
        await user.save()
        sendToken(user,201,res)
    }catch(error){
        res.status(500).json({
            error:true,
            message:error.message
        })
    }
}

exports.login = async (req,res,next)=>{
    let {email,password} = req.body
    try {
        const user = await User.findOne({email}).select("+password")
        if(!user) return res.status(404).json({error:true,message:"No se encontro un usuario"})
        const isMatch = await user.matchPasswords(password)
        console.log(isMatch)
        if(!isMatch) return res.status(404).json({error:true,message:"Invalid Credentials"})
        sendToken(user,201,res) 
    } catch (error) {
        res.status(505).json({error:true,message:error.message})
    }
}


const sendToken = (user,statusCode,res)=>{
    const token = user.signToken()
    console.log(token)
    res.status(statusCode).json({
        error:false,
        token,
        user:{
            username:user.username,
            email:user.email
        }
    })
}