const jwt = require("jsonwebtoken")
const User = require("../db/models/User")


exports.protect = async (req,res)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token= req.headers.authorization.split(" ")[1]
    }
    if(!token){
        res.status(401).json({error:true,message:"Not authorized to access this route"})
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if(!user) res.status(404).json({error:true,message:"Not found this id"})
        req.user = user
    }catch(error){

    }
}