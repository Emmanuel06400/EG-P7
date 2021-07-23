const express = require('express');
const bodyParser = require('body-parser');
//require('dotenv').config();
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

 //ROUTES
 //app.use('/images', express.static(path.join(__dirname, 'images')));
 //app.use('/api/user', userRoutes);
 //app.use('/api/post', postRoutes);
 //app.use('/api/comment', commentRoutes);
 //app.use('/api/like', likeRoutes);
 //app.use('/api/notif', notifRoutes);

  //EXPORT
module.exports = app;