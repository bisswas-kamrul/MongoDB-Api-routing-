const mongoose = require('mongoose');
const  Schema  = mongoose.Schema
const EmailPost = new Schema({
  Firstname:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },

});
module.exports = mongoose.model("List" ,EmailPost)