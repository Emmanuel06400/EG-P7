const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js');
//require('dotenv').config();

const morgan = require('morgan')
//app.use(morgan('combined'))

const app = express();
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


// Configuration cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

 // Parse le body des requetes en json
app.use(bodyParser.json());
// Sécurisation des headers
app.use(helmet());

app.get(console.log('test'));

app.use((req, res, next) => {
  res.status(200).json({ error: 'Requête  authentifiée' })
});

 //ROUTES
 /*
 app.use('/images', express.static(path.join(__dirname, 'images')));

 app.use('/api/user', userRoutes);
 app.use('/api/post', postRoutes);

  //EXPORT*/
module.exports = app;