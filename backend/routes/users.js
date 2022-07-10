const express = require("express");
require("express-async-errors");
require("dotenv").config();
const nodemailer = require("nodemailer");
let sgMail = require('@sendgrid/mail');
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../model/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var ObjectId= require ('mongoose').Types.ObjectId
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




router.get("/profile", auth, async (req, res) => {
  const profile = await User.findById({_id: req.user._id }).select("-password ");
  if(!profile){
    return res.status(404).json({status : false  , message:"user record not found "})
  }
  else{
    return res.status(200).json({ profile})
    
  }
});

router.get("/",  async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send("users not found");
  } 
});

 // get user by id  
router.get("/get/:userId", async (req, res) => {
    try {
      const data = await User.findById(req.params.userId);
      res.status(200).send(data);
    } catch (err) {
      res.status(400).send("user not found");
    }
  });


// get pending request
router.get("/request", async (req, res) => {
  const pendingRequest = await User.find({ decision: "pending" });
  res.status(200).send(pendingRequest);
});

// get accepted request 
router.get("/AcceptedRequest",  async (req, res) => {
  try {
    const AcceptedRequest = await User.find({ decision: "accepted" , isArchived: false});
    res.status(200).send(AcceptedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});

// get refused request 
router.get("/RefusedRequest",  async (req, res) => {
  try {
    const RefusedRequest = await User.find({ decision: "refused"});
    res.status(200).send(RefusedRequest);
  } catch (error) {
    res.status(401).send({ error });
  }
});

// accept request
router.patch("/accept/:userId", async (req, res) => {
  try {
    const updateUserdecision = await User.findOneAndUpdate(
      { _id: req.params.userId },
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
    text: "hi ,"+ updateUserdecision.name + " your connexion request was accepted , thank you for choosing Uptech",
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(400).send("mochekla fi sendEmail");
    }
    res.status(200).send('jawek behy')

  })
  res.status(200).send("user accepted and email sended ");
} catch (err) {
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_*");
  }
});
 
// refuse request
router.patch("/refuse/:userId", async (req, res) => {
  try {
    const UpdateUserdecision = await User.findOneAndUpdate(
      { _id: req.params.userId },
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
    text: "hi ,"+ UpdateUserdecision.name + " your connexion request was refused , we are sorry",
  }
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.status(400).send("mochekla fi sendEmail");
    }
    res.status(200).send('jawek behy')

  })

    res.status(200).send("user refused and email sended ");
  } catch (err) {
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_*");
  }
});


//arrchived Users
router.get("/arrchivedUser",  async (req, res) => {
  try {
    const arrchivedUsers = await User.find({ isArchived: true});
    res.status(200).send(arrchivedUsers);
  } catch (error) {
    res.status(401).send({ error });
  }
});

//arrchive user 
router.patch("/arrchive/:userId",  async (req, res) => {
  try {
    const UpdateUserStaus = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          isArchived: true,
        },
      }
    );
    res.status(200).send("status changed for " + UpdateUserStaus.isArchived);
  } catch (err) {
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_*");
  }
});

// disarchiver user 
router.patch("/disarchiver/:userId",  async (req, res) => {
  try {
    const UpdateUserStaus = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          isArchived: false,
          decision: "accepted",
        },
      }
    );
    res.status(200).send("status changed for " + UpdateUserStaus.isArchived);
  } catch (err) {
    res.status(400).send({ message: err });
    console.log("mafama chay possible xD*_*");
  }
});

//delete user 
router.delete('/delete/:userId',async (req,res)=>{
  try{
   const removedUser = await User.deleteOne({_id : req.params.userId});
   res.status(200).send("deleted succesfully");
  }catch(err){
    res.status(400).send({message : err});
  }
  });


// update User 
  router.put('/updateUser/:id', async (req,res)=>{
    try{
    const updateUser = await User.updateOne({
      _id : req.params.id}
      ,{$set :{
        name :req.body.name,
        FamilyName :req.body.FamilyName,
        PhoneNumber :req.body.PhoneNumber,
        email :req.body.email,
        
      }
      });
    res.status(200).send('updated successfully ' );
    }catch(err){
      res.status(400).send({message : err});
      console.log('mafama chay possible xD*_*')
    }
  })

  // refused Request 
  router.get("/RefusedRequest",  async (req, res) => {
    try {
      const RefusedRequest = await User.find({ decision: "refused"});
      res.status(200).send(RefusedRequest);
    } catch (error) {
      res.status(401).send({ error });
    }
  });

//register
router.post("/",upload.single('file'),
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("email must be a valid email ")
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength(8)
      .withMessage("password length short , min 8 char required"),
    body("name").trim().isLength(3),
    body("FamilyName").trim().isLength({min:3}),
    body("PhoneNumber").trim().isLength({min:8}),

  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.send(errors);
    }
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(401).send("email already exist ");
    }
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      FamilyName: req.body.FamilyName,
      PhoneNumber: req.body.PhoneNumber,
      password: req.body.password,
      file: req.file.originalname,
    });
    

    if(user.password != user.confirmPassword){
      return res.status(400).send("password and confirm password should be the same ");
     }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    try {
      const savedUser = await user.save();
      const { SpecificItem } = _.pick(savedUser, ["_id", "name", "email" , "file"]);
      res.status(200).send("registered successfully " );
      console.log({SpecificItem})
    } catch (err) {
      res.status(400).send({ err });
    }
  }
);

router.get('/get/:id',(req,res)=>{
    
  if(!ObjectId.isValid(req.params.id))
return res.status(400).send('no record with given id: ${req.params.id} ');

User.findById(req.params.id,(err,doc)=>{
  if(!err)
  {res.send(doc);}
  else
  {console.log('error in find employees');}

 })

});
module.exports = router;
