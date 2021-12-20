exports.getPrivateData = (req,res,next)=>{
    res.status(200).json({error:false,user:req.user})
}