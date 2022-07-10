const express =require('express');
require('express-async-errors');
const nodemailer = require("nodemailer");
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const demandeStage = require('../model/demandeStage');
const multer = require("multer");
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

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
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter : fileFilter
});


//get all
router.get("/",async (req, res) => {
    try {
      const {page =1 ,limit=10} = req.query;
      const demandes = await demandeStage.find({
        decision : "pending"
      });
      res.send(demandes);
    } catch (err) {
      res.send({ messege: err });
    }
  });

  // router.get("/:name", async (req, res) => {
  //   try {
  //     const pendingRequest = await demandeStage.find({firstName:req.params.name});
  //     res.json(pendingRequest);
  //   } catch (err) {
  //     res.json("demande not found");
  //   }
  // });

   // get req by id  
   router.get("/get/:inReqId",  async (req, res) => {
    try {
      const data = await demandeStage.findById(req.params.inReqId);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("request not found");
    }
  });

     // get image by name  
     router.get("/get/:file",  async (req, res) => {
      try {
        const data = await demandeStage.findById(req.params.file);
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send("request not found");
      }
    });

//filter
  router.get("/filter/lisence",async (req, res) => {
    try {
      const demandes = await demandeStage.find({levelOfStudy:"lisence"});
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });
  router.get("/filter/master",async (req, res) => {
    try {
      const demandes = await demandeStage.find({levelOfStudy:"master"});
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });
  
   router.get("/filter/ingineurie",async (req, res) => {
    try {
      const demandes = await demandeStage.find({levelOfStudy:"ingineurie"});
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });


  //delete request 
router.delete('/delete/:inershipId',async (req,res)=>{
  try{
   const removedInership = await demandeStage.deleteOne({_id : req.params.inershipId});
   console.log('deleted');
   res.status(200).send(removedInership);
  }catch(err){
    res.status(400).send({message : err});
  }
  });


  // accept request
router.patch("/accept/:demandeId", async (req, res) => {
  try {
    const updateUserdecision = await demandeStage.findOneAndUpdate(
      { _id: req.params.demandeId },
      { $set: { decision: "accepted" } }
    );
    let transporter = nodemailer.createTransport({
    
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_SECRET_EMAIL,
        pass: process.env.Password_Email,
      },
    });
    
  let mailOptions = {
    from: 'jihedbndief22@gmail.com', // TODO: email sender
    to: updateUserdecision.Email, // TODO: email receiver
    subject: 'Inership Request ',
    text: "hi ,"+ updateUserdecision.firstName + " your inership request was accepted , thank you for choosing Uptech",
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(400).send("mochekla fi sendEmail");
    }
    res.status(200).send('jawek behy')

  })
  res.status(200).send("decision changed for " + updateUserdecision);
} catch (err) {
    res.status(400).send({err});
    console.log("mafama chay possible xD*_*     !!!! "+ err);
  }
});


// refuse request
router.patch("/refuse/:demandeId", async (req, res) => {
  try {
    const UpdateDemanddecision = await demandeStage.findOneAndUpdate(
      { _id: req.params.demandeId },
      { $set: { decision: "refused" } }
    );
    let transporter = nodemailer.createTransport({
    
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_SECRET_EMAIL,
        pass: process.env.Password_Email,
      },
    });
    
  let mailOptions = {
    from: 'jihedbndief22@gmail.com', 
    to: UpdateDemanddecision.Email, 
    subject: 'inership Request ',
    text: "hi ,"+ UpdateDemanddecision.firstName + " your inership request was refused , we are sorry",
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(400).send("mochekla fi sendEmail");
    }
    res.status(200).send('jawek behy')

  })

    res.status(200).send("decision changed for " + UpdateDemanddecision);
  } catch (err) {
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_* !!!!! "   + err);
  }
});


//get accepted Request
router.get("/acceptedRequest",  async (req, res) => {
  try {
    const RefusedRequest = await demandeStage.find({ decision: "accepted"});
    res.status(200).send(RefusedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});

//get Refused Request
router.get("/RefusedRequest",  async (req, res) => {
  try {
    const RefusedRequest = await demandeStage.find({ decision: "refused"});
    res.status(200).send(RefusedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});
// upload.single('InReqImg')
router.post("/",upload.single('file'),[
    body('Email').trim().isEmail().withMessage('email must be a valid email '),
    body('firstName').trim().isLength({ min: 3 }).withMessage("min length must be 3 char"),
    body('lastName').trim().isLength({ min: 3 }).withMessage("min length must be 3 char"),
    body('tel').trim().isLength(8).withMessage("musn't be empty"),
    body('birthday').trim().isDate().withMessage("Must be a valid date"),
    body('adresse').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('profilLinkedin').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('levelOfStudy').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('University').trim().isLength({ min: 1 }).withMessage("musn't be empty"),
    body('Subsidiary').trim().isLength({ min: 1 }).withMessage("musn't be empty"),
    body('competences').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('certifcats').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('internshipDuration').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('startDate').trim().isDate().withMessage("Must be a valid date"),
    body('endDate').trim().isDate().withMessage("Must be a valid date"),
    body('file'),
  ], async (req, res) => {
    const errors = validationResult(req);
       if (!errors.isEmpty()){
         console.log(errors); 
         return res.status(401).send(errors);
       }
        console.log(req.file);
    const NewDemand = new demandeStage({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Email : req.body.Email,
        tel : req.body.tel,
        birthday : req.body.birthday,
        adresse : req.body.adresse,
        profilLinkedin : req.body.profilLinkedin,
        levelOfStudy : req.body.levelOfStudy,
        University : req.body.University,
        Subsidiary : req.body.Subsidiary,
        competences : req.body.competences,
        certifcats : req.body.certifcats,
        internshipDuration : req.body.internshipDuration,
        startDate : req.body.startDate,
        endDate : req.body.endDate,
        file: req.file.originalname,
    });
   
    try {
      const savedDemande = await NewDemand.save();
      console.log(savedDemande);
      res.status(200).send(savedDemande);
    } catch (err) {
      console.log({err})
      res.status(400).send({err});
    }
  });

module.exports = router;