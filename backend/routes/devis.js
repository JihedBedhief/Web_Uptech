const express = require("express");
require("express-async-errors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const router = express.Router();
const Devis = require("../model/devis");
const _ = require("lodash");


router.post("/", async (req, res) => {
    const data = new Devis({
     user : req.body.user_id,
     services : req.body.services ,
     total : req.body.total    });
  try {
    const savedDevis = await data.save();
    console.log(savedDevis);
    res.status(200).send(savedDevis);
  } catch (err) {
    console.log({err})
    res.status(400).send({err});
  }
});

router.get("/allDevis", async (req, res) => {
    try {
      const devis = await Devis.find().populate("user","name email PhoneNumber")
      res.status(200).send(devis);
    } catch (err) {
      res.status(400).send({err});
    }
  });

  router.delete('/delete/:devisId',async (req,res)=>{
    try{
     const removedDevis = await Devis.deleteOne({_id : req.params.devisId});
     res.status(200).send(removedDevis);
    }catch(err){
      res.status(400).send({message : err});
    }
    });

  module.exports = router;