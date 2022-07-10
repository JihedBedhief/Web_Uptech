const express =require('express');
require('express-async-errors');
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const Contact = require('../model/contact');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const contact = require('../model/contact');


router.get("/", async (req, res) => {
    try {
      const contats = await Contact.find();
      res.json(contats);
    } catch (err) {
      res.json({ messege: err });
    }
  });
  router.get("/:name", async (req, res) => {
    try {
      const {page =1 ,limit=10} = req.query;
      const pendingRequest = await Contact.find({firstName:req.params.name}).limit(limit*1).skip((page-1));
      res.json(pendingRequest);
    } catch (err) {
      res.send("contact message not found");
    }
  });


  router.delete('/:contactId',async (req,res)=>{
    try{
     const removedContact = await Contact.deleteOne({_id : req.params.contactId});
     console.log('deleted');
     res.status(200).send(removedContact);
    }catch(err){
      res.status(400).send({message : err});
    }
    });
  
  router.post("/",[
    body('email').trim().isEmail().withMessage('email must be a valid email ').normalizeEmail(),
    body('fullName').trim().isLength(3).withMessage("min length must be 3 char"),
    body('sub').trim().isLength(8).withMessage("musn't be empty"),
    body('msg').trim().isLength(8).withMessage("musn't be empty"),
  ], async (req, res) => {
    const errors = validationResult(req);
       if (!errors.isEmpty()){
         console.log(errors);
         return res.status(401).send(errors);
       }
    const newContact = new Contact({
      fullName: req.body.fullName,
      email: req.body.email,
      sub : req.body.sub,
      msg : req.body.msg
    });
    try {
      const savedContact = await newContact.save();
      console.log(savedContact);
      res.status(200).send("sended successfully");
    } catch (err) {
      res.status(401).send({ err });
    }
  });

  module.exports = router;