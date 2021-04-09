const Joi = require('joi');
require('express-async-errors');
require('winston-mongodb');
const winston = require('winston');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const config = require('config');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

// process.on('uncaughtException',(ex)=>{
//     winston.error(ex.message,ex);
//     process.exit(1);
// })

winston.exceptions.handle(new winston.transports.File({filename:'uncaughtExceptions.log'}));

process.on('unhandledRejection',(ex)=>{
    throw ex;
    // winston.error(ex.message,ex);
    // process.exit(1);
})

winston.add(new winston.transports.File({ filename: 'logfile.log' }));
winston.add(new winston.transports.MongoDB({ 
    db : 'mongodb://localhost/vidly',
    level: 'error' //so that only error messages will be logged
}))

//throw new Error('Something failed during startup')

// const p = Promise.reject(new Error('Something failed miserably'));
// p.then(()=> console.log('Done'))

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR : jwtPrivateKry is not defined');
    process.exit(1)
}


const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Listening on port ${port}...`))