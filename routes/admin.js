const express = require('express');
const router = express.Router();
const { login, signup } = require('../controllers/adminController.js');
const auth = require('../middlewares/auth.js');



// admin login for level 2 priviledges
router.post('/login', login);


// admin create another admin
router.post('/signup', auth, signup)



module.exports = router;