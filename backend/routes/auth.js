const express =require('express');
const { body ,validationResult } = require('express-validator');
const router = express.Router();
const User = require('../model/user')
const _ =require('lodash');
const bcrypt = require("bcrypt");


router.post('/',[
    body('email').trim().isEmail().withMessage('email must be a valid email ').normalizeEmail(),
    body('password').trim().isLength(8).withMessage("password length short , min 8 char required"),
],
async(req,res)=>{
    const errors = validationResult(req);
       if (!errors.isEmpty()){
         return res.json({message:'errors' , success : false});
       }
    
    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(404).send({message : 'invalid email' , success : false});
    }
    if(user.decision == "refused"){
      return res.status(401).send({message : "you can't register , contact us" , success :false});
    }
    if(user.decision == "pending"){
      return res.status(401).send({message : "you are pending try to contact the admin" , success :false});
    }
    if(user.isArchived == true){
      return res.status(401).send({message : "you are archived try to contact the admin" , success :false});
    }
    const checkPassword = await  bcrypt.compare(req.body.password,user.password);
    if(!checkPassword || user.decision != "accepted"){
        return res.status(404).send({message : 'invalid email or password' , success : false});
    }
    if ( user.isArchived==true){
      return res.status(404).send({message : 'You are an archived user try to contact the Admin , Thank you :)' , success : false});
      }

    if ( user.decision=="accepted"){
    const token = user.generateTokens();
    return res.status(200).json({data : {token, user }, success : true});
    }

});



module.exports = router;