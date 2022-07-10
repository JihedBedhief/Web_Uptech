const express =require('express');
require('express-async-errors');
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const demandeIntervention = require('../model/intervention');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');


router.get("/", async (req, res) => {
    try {
      const {page =1 ,limit=10} = req.query;
      const demandes = await demandeIntervention.find().limit(limit *1).skip((page-1));
      res.json(demandes);
    } catch (err) {
      res.json({ messege: err });
    }
  });

  router.get("/:name", async (req, res) => {
    try {
      const {page =1 ,limit=10} = req.query;
      const pendingRequest = await demandeIntervention.find({name:req.params.name}).limit(limit*1).skip((page-1));
      res.json(pendingRequest);
    } catch (err) {
      res.send("demande not found");
    }
  });
  
// accept request
router.patch("/accept/:demandeId", async (req, res) => {
  try {
    const updateUserdecision = await demandeIntervention.findOneAndUpdate(
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
    text: "hi ,"+ updateUserdecision.name + " your inership request was accepted , thank you for choosing Uptech",
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
    const RefusedRequest = await demandeIntervention.find({ decision: "refused"});
    res.status(200).send(RefusedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});

// refuse request
router.patch("/refuse/:demandeId", async (req, res) => {
  try {
    const UpdateDemanddecision = await demandeIntervention.findOneAndUpdate(
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
    text: "hi ,"+ UpdateDemanddecision.name + " your inership request was refused , we are sorry",
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

  router.post("/",[auth],[
    body('email').trim().isEmail().withMessage('email must be a valid email ').normalizeEmail(),
    body('fullName').trim().isLength(8).withMessage("min length must be 8 char"),
    body('entreprise').trim().isLength(8).withMessage("musn't be empty"),
    body('tel').trim().isLength(8).withMessage("musn't be empty"),
    body('TitredIntervention').trim().isLength(3).withMessage("musn't be empty"),
  ], async (req, res) => {
    const errors = validationResult(req);
       if (!errors.isEmpty()){
         console.log(errors);
         return res.status(401).send(errors);
       }
    const NewDemand = new demandeIntervention({
        entreprise: req.body.entreprise,
        fullName: req.body.fullName,
        email : req.body.email,
        tel : req.body.tel,
        typeDeServiceUrgence : req.body.typeDeServiceUrgence,
        Urgence : req.body.Urgence,
        SévéritéFréquenceTitredIntervention : req.body.SévéritéFréquenceTitredIntervention,
        FréquenceTitredIntervention : req.body.FréquenceTitredIntervention,
        TitredIntervention : req.body.TitredIntervention,
        DescriptionDétaillée : req.body.DescriptionDétaillée,
        PièceJointe : req.body.PièceJointe,
    });
    try {
      const savedDemande = await NewDemand.save();
      res.json(savedDemande);
    } catch (err) {
      res.json({ err });
    }
  });
  
module.exports = router;