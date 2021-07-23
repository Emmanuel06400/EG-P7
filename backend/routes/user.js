const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validate-inputs');
const auth = require('../middlewares/auth');
const userCtrl = require('../controllers/user');
const multer = require('../middlewares/multer-config');

router.post('/new', validate.newUser, userCtrl.newuser);
router.post('/login', validate.login, userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/isauth', auth, userCtrl.isAuth);
router.get('/currentuser', auth, userCtrl.getCurrentUser);
router.get('/', auth, userCtrl.getAllUsers);
router.get('/search', auth, validate.searchUser, userCtrl.searchUsers);
router.get('/:id', auth, validate.id, userCtrl.getOneUser);
router.get('/:id/posts', auth, validate.id, userCtrl.getAllPostsOfUser);

module.exports = router;