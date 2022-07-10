const express =require('express');
require('express-async-errors');
const nodemailer = require("nodemailer");
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const demandeRec = require('../model/demandeRecrutement');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

//get all
router.get("/", async (req, res) => {
    try {
      const {page =1 ,limit=10} = req.query;
      const demandes = await demandeRec.find({
        decision : "pending"
      }).limit(limit *1).skip((page-1));
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });

   // get req by id  
   router.get("/get/:inReqId",  async (req, res) => {
    try {
      const data = await demandeRec.findById(req.params.inReqId);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("request not found");
    }
  });
    
  // router.get("/:name", async (req, res) => {
  //   try {
  //     const pendingRequest = await demandeRec.find({firstName:req.params.name});
  //     res.json(pendingRequest);
  //   } catch (err) {
  //     res.json("demande not found");
  //   }
  // });



  router.get("/filter/:levelOfStudy", async (req, res) => {
    try {
      const demandes = await demandeRec.find({levelOfStudy:req.params.levelOfStudy});
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });


  //get accepted
  router.get("/acceptedRequest",  async (req, res) => {
    try {
      const acceptedRequest = await demandeRec.find({ decision: "accepted"});
      res.status(200).send(acceptedRequest);
    } catch (error) {
      res.status(401).send({ error });
    }
  });

  //get refused
  router.get("/RefusedRequest",  async (req, res) => {
    try {
      const RefusedRequest = await demandeRec.find({ decision: "refused"});
      res.status(200).send(RefusedRequest);
    } catch (error) {
      res.status(401).send({ error });
    }
  });

//delete
router.delete('/delete/:inershipId',async (req,res)=>{
  try{
   const removedInership = await demandeRec.deleteOne({_id : req.params.inershipId});
   console.log('deleted');
   res.status(200).send(removedInership);
  }catch(err){
    res.status(400).send({message : err});
  }
  });

// accept request
router.patch("/accept/:demandeId", async (req, res) => {
  try {
    const updateUserdecision = await demandeRec.findOneAndUpdate(
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
    to: updateUserdecision.email, // TODO: email receiver
    subject: 'Connexion Request ',
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
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_*");
  }
});

router.get("/RefusedRequest",  async (req, res) => {
  try {
    const RefusedRequest = await demandeRec.find({ decision: "refused"});
    res.status(200).send(RefusedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});

// refuse request
router.patch("/refuse/:demandeId", async (req, res) => {
  try {
    const UpdateDemanddecision = await demandeRec.findOneAndUpdate(
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
    to: UpdateUserdecision.email, 
    subject: 'Connexion Request ',
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
    console.log("mafama chay possible xD*_*");
  }
});


router.post("/",[
    body('email').trim().isEmail().withMessage('email must be a valid email ').normalizeEmail(),
    body('firstName').trim().isLength(3).withMessage("min length must be 3 char"),
    body('lastName').trim().isLength({ min: 3 }).withMessage("musn't be empty"),
    body('tel').trim().isLength(8).withMessage("musn't be empty"),
    body('birthday').trim().isDate().withMessage("Must be a valid date"),
    body('adresse').trim().isLength(8).withMessage("musn't be empty"),
    body('profilLinkedin').trim().isLength(5).withMessage("musn't be empty"),
    body('levelOfStudy').trim().isLength(5).withMessage("musn't be empty"),
    body('specialité').trim().isLength(5).withMessage("musn't be empty"),
    body('expérience').trim().isLength(5).withMessage("musn't be empty"),
    body('desiredPosition').trim().isLength(5).withMessage("musn't be empty"),
  ], async (req, res) => {
    const errors = validationResult(req);
       if (!errors.isEmpty()){
         return res.status(401).send(errors);
       }
    const NewDemand = new demandeRec({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email : req.body.email,
      tel : req.body.tel,
      birthday : req.body.birthday,
      adresse : req.body.adresse,
      profilLinkedin : req.body.profilLinkedin,
      levelOfStudy : req.body.levelOfStudy,
      specialité : req.body.specialité,
      expérience : req.body.expérience,
      desiredPosition : req.body.desiredPosition,
    });
 
    try {
      const savedDemande = await NewDemand.save();
      res.status(200).send(savedDemande);
    } catch (err) {
      res.status(400).send({ err });
    }
  });
  
module.exports = router;