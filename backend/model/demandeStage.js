const mongoose = require("mongoose");


const demandeStageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
   Email:{
    type: String,
    required: true,
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
  University: {
    type: String,
    required: true,
  },
  Subsidiary: {
    type: String,
    required: true,
  },
  competences:{
    type: String,
  },
  certifcats: {
    type: String,
    required: true,
  },
  internshipDuration:{
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate:{
    type: String,
    required: true,
  },
  decision:{
    type:String,
    default: "pending",
  },
  file:{
    type:String,
    required: true,
  },
});

module.exports = mongoose.model("demandeStage", demandeStageSchema);

