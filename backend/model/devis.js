const mongoose = require("mongoose");


const DevisSchema = new mongoose.Schema({
  user:{
    type :mongoose.Schema.Types.ObjectId,
    ref : "User",
  },
  services: [] ,
  total :{
    type : Number,
  }
});

module.exports = mongoose.model("Devis", DevisSchema);