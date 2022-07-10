const mongoose = require("mongoose");


const DevisSchema = new mongoose.Schema({
  user:{
    type :mongoose.Schema.Types.ObjectId,
    ref : "User",
  },
  services: [{
    type :mongoose.Schema.Types.ObjectId,
    ref : "Service",
  }] ,
  total :{
    type : Number,
  }
});

module.exports = mongoose.model("Devis", DevisSchema);