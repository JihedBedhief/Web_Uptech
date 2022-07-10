const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required:true,
  },
  email:{
    type: String,
    required:true,
  },
  sub:{
    type: String,
    required:true,
  },
  msg:{
    type: String,
    required:true,
  }
});

module.exports = mongoose.model("contacts", contactSchema);
