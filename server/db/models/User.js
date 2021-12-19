const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    minlength: 6,
    select:false 
  },
  email:{
    type: String,
    unique: true,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email"
      ]
  },
},{versionKey:false});

UserSchema.pre("save", async function(next){
  const user = this
  const SALT = 10
  if(!user.isModified("password")){
    return next()
  }
  try{
    let crypt = await bcrypt.hash(user.password,SALT)
    user.password = crypt
    return next()
  }catch(err){
    return next(err)
  }
}
)

UserSchema.methods.matchPasswords = function(password){
   return bcrypt.compare(password,this.password)
}

UserSchema.methods.signToken = function (){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRE})
}



const User = model("User", UserSchema);





module.exports = User;
