const { number } = require("joi");
const mongoose = require("mongoose");


const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  file:{
    type:String,
  },
  descreption: {
    type: String,
  },
  prix:{
    type: Number,
  },
  categorie :{
    // type :mongoose.Schema.Types.ObjectId,
    // ref : "Categorie",
    // required :true ,
    type: String,
    },
    ischecked:{
      type: Boolean,
      default: false,
    },
});

module.exports = mongoose.model("Service", serviceSchema);
