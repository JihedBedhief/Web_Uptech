const winston = require('winston');
require('winston-mongodb');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
  
    new winston.transports.File({ 
        filename: 'error.log',
         level: 'error',
         format : winston.format.combine(winston.format.timestamp(),winston.format.json()),
    }),
    new winston.transports.MongoDB({ 
         level: 'error',
         options :{ useUnifiedTopology: true },
         db : process.env.DB_CONNECTION,
    }),
    
   //new winston.transports.Console({level: 'info'})
  ],
});

module.exports = logger;