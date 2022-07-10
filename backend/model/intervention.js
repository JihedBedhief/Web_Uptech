const mongoose = require("mongoose");


const interventionSchema = new mongoose.Schema({
  entreprise: {
    type: String,
    required:true,
  },
  fullName: {
    type: String,
    required:true,
  },
  email:{
    type: String,
    required:true,
  },
  tel: {
    type: String,
    required:true,
  },
  typeDeService: {
    type: String,
    required:true,
  },
  Urgence:{
    type: String,
    required:true,
  },
  Sévérité: {
    type: String,
    required:true,
  },
  Fréquence: {
    type: String,
    required:true,
  },
  TitredIntervention :{
    type: String,
    required:true,
  },
  DescriptionDétaillée: {
    type: String,
  },
  PièceJointe :{
    type: String,
  },
  decision:{
    type:String,
    default: "pending",
  },
});

module.exports = mongoose.model("demandeIntervention", interventionSchema);
