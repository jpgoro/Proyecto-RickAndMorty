const jwt = require("jsonwebtoken")
const User = require("../db/models/User")


exports.protect = async (req,res,next)=>{
    let token;
    let auth = req.get("Authorization")
    if(auth && auth.startsWith("Bearer")){
        token= auth.split(" ")[1]
    }
    if(!token || token==""){
        console.log(token)
        return res.status(401).json({error:true,message:"Not authorized to access this route"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if(!user) res.status(404).json({error:true,message:"Not found this id"})
        req.user = user
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({error:true,message:error.message})
    }
}