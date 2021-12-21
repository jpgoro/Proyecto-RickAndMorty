const mongoose = require("mongoose")
const {Schema,model} = mongoose


const CharacterSchema = new Schema({
    name: {
        type:String,
        unique:true,
        minlength:1
    },
    species:String,
    gender:String,
    status:String
},{versionKey:false})

const Character = model("Character",CharacterSchema)


module.exports = Character