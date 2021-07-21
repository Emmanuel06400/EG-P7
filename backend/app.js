const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuration cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

 //ROUTES
 app.use('/images', express.static(path.join(__dirname, 'images')));
 app.use('/api/user', userRoutes);
 app.use('/api/post', postRoutes);
 app.use('/api/comment', commentRoutes);
 app.use('/api/like', likeRoutes);
 app.use('/api/notif', notifRoutes);

  //EXPORT
module.exports = app;