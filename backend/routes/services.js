const express =require('express');
require('express-async-errors');
const router = express.Router();
const Service = require('../model/service');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage:storage ,
  limits: {
    fileSize: 1024 * 1024 * 50 // 50MB
  },
  fileFilter : fileFilter
});


// get all services 
router.get("/getall", async (req, res) => {
    try {
      const Services = await Service.find().populate("categorie", "name");;
      res.status(200).send(Services);
    } catch (err) {
      res.status(400).send({ messege: err });
    }
  });

  
  // add service
router.post("/add",upload.single('file'), async (req, res) => {
      //  console.log(req.file);
      const data = new Service({
        name: req.body.name, 
        descreption: req.body.descreption,
        file: req.file.originalname,//.originalname
        prix : req.body.prix,
        categorie : req.body.categorie,
        title : req.body.title,
      });
      console.log(req.file)
    
    try {
      const savedService = await data.save();
      console.log(savedService);
      res.status(200).send(savedService);
    } catch (err) {
      console.log({err})
      res.status(400).send({err});
    }
  });

  // specific service 
  router.get("/get/:serviceId", async (req, res) => {
    try {
      const data = await Service.findById( req.params.serviceId);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("service not found");
    }
  });


  // get service by name  
  router.get("/getService/:name", async (req, res) => {
    try {
      const data = await Service.find({"name" :req.params.name});
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("service not found");
    }
  });

  //filter
  router.get("/filter/IT_SYSTEM",async (req, res) => {
    try {
      const data = await Service.find({categorie:"IT SYSTEM"});
      res.json(data);
    } catch (err) {
      res.json({ messege: err });
    }
  });

  router.get("/filter/DEV",async (req, res) => {
    try {
      const data = await Service.find({categorie:"DEVELOPMENT"});
      res.json(data);
    } catch (err) {
      res.json({ messege: err });
    }
  });

  router.get("/filter/Marketing",async (req, res) => {
    try {
      const data = await Service.find({categorie:"DIGITAL MARKETING & DESIGN"});
      res.json(data);
    } catch (err) {
      res.json({ messege: err });
    }
  });

  
  // delete spesific service 
  router.delete('/delete/:serviceId',async (req,res)=>{
    try{
     const removedService = await Service.deleteOne({_id : req.params.serviceId});
     res.status(200).send(removedService);
    }catch(err){
      res.status(400).send({message : err});
    }
    });
  
    //update a service 
  router.put('/update/:serviceId', async (req,res)=>{
    try{
    const updatedService = await Service.updateOne({
      _id : req.params.serviceId},
      {$set :
      {
        name :req.body.name,
        descreption :req.body.descreption,
        prix :req.body.prix,
        categorie :req.body.categorie,
        // file: req.file.originalname,
        title: req.body.title,
      }});
    res.status(200).send('updated successfully ' + updatedService);
    }catch(err){
      res.status(400).send({message : err});
      console.log('mafama chay possible xD*_*')
    }
  })
  module.exports = router;