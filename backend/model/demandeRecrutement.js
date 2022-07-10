const mongoose = require("mongoose");


const demandeRecrutementSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email:{
    type: String,  
    required :true,  
  },
  tel: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  adresse:{
    type: String,
    required: true,
  },
  profilLinkedin: {
    type: String,
    required: true,
  },
  levelOfStudy: {
    type: String,
    required: true,
  },
  specialité:{
    type: String,
    required: true,
  },
  expérience: {
    type: String,
    required: true,
  },
  desiredPosition:{
    type: String,
    required: true,
  },
  decision:{
    type:String,
    default: "pending",
  },
});

module.exports = mongoose.model("demandeRecrutement", demandeRecrutementSchema);

