const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength:3,
      maxlength:44,
    },
    FamilyName: {
      type: String,
      required: true,
      minlength:3,
      maxlength:44,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minlength:10,
      maxlength:255,
    },
    password: {
      type: String,
      required: true,
      minlength:8,
      maxlength:1024,
    },
    confirmPassword:{
      type: String ,
      required: true,
    },
    isAdmin:Boolean,
    decision:{
      type:String,
      default: "pending",
    },
    isArchived:{
      type: Boolean,
      default: false,

    },
    resetLink:{
      data:String,
      default:'',
    },
    file:{
      type:String,
    },
  });
  
  userSchema.methods.generateTokens = function(){
    const token = jwt.sign({_id:this._id,isAdmin:this.isAdmin}, 'privateKey',
    {expiresIn:process.env.JWT_EXP
    });
    return token ;
  }

  module.exports = mongoose.model("User", userSchema);
  
  