const Joi = require('joi');
const express = require('express');
const app = express();
const logger = require('./middleware/logger')
const authenticate = require('./middleware/authenticate');
const course = require('./routes/courses');
const home=require('./routes/home.js')
const debug=require('debug')('app:startup');
const morgan = require('morgan')
const config=require('config')

app.set('view engine','pug')
app.set('views','./views')

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))
app.use(logger);
app.use(authenticate);
app.use('/api/courses',course);
app.use('/',home)

if(app.get('env')==="development"){
    app.use(morgan('tiny'))
    debug('morgan enabled')
}

console.log('password:' +config.get('mail.password'))
console.log("environment:",config.get('name'))


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app is listening to port ${port}...`))