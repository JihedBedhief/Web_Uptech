const express = require('express');
const cors = require('cors')
const app = express();
const services = require('./routes/services');
const users = require('./routes/users');
const demandesRec = require('./routes/demandesRec');
const demandesStage = require('./routes/demandesStage');
const demandeIntervention= require('./routes/demandeIntervention');
const contact = require('./routes/contact');
const categorie = require('./routes/categorie');
const auth = require('./routes/auth');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require("path");  
require('dotenv/config');
const mongoose = require('mongoose');
const logger= require('./config/logger');
const devis = require('./routes/devis');


mongoose.connect(process.env.DB_CONNECTION,{
   useNewUrlParser:true ,
   useUnifiedTopology:true
}).then(()=>console.log('connected to db'))
.catch((e)=>logger.error('check ur database server :'+ e));

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
app.use(express.json());
app.use(helmet({
   crossOriginEmbedderPolicy: false,
 }));

 app.use(express.static('public'));
 app.use('/uploads',express.static("uploads"))
app.use(cors({
   credentials: true,
   methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
   origin: ['http://localhost:4200','http://localhost:3000']
}));
app.use("/api/services",services);
app.use("/api/users",users);
app.use("/api/auth",auth);
app.use("/api/demandesRec",demandesRec);
app.use("/api/demandesStage",demandesStage);
app.use("/api/support",demandeIntervention);
app.use("/api/contact",contact);
app.use("/api/categorie",categorie);
app.use("/api/devis",devis);


// page not found 
app.all('*',(req,res,next)=>{
   res.status(404).json({
      status:'false ',
      message :'Page Note Found !'
   })
})

// bech tbadlou mel mode development le mode production taaamel set NODE_ENV= production
if(app.get('env')==='development'){
   app.use(morgan('tiny'));
} 

 app.get('/',(req,res)=>{
    res.send("bedhief jihed");
 })


 const port = process.env.port || 3000;
 app.listen(3000,()=>console.log('app working on port '+port+'...'));