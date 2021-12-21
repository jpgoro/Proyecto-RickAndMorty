const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const LocationSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minlength: 1
  },
  type: {
    type: String,
    minlength: 1
  },
  dimention: {
    type: String,
    minlength: 1
  } 
},{versionKey:false});

const Location = model("Location", LocationSchema);

module.exports = Location;
