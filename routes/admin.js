const express = require('express');
const router = express.Router();
const { login, signup } = require('../controllers/adminController.js');



// admin login for level 2 priviledges
router.post('/login', login);


// admin create another admin
router.post('/signup', signup)



module.exports = router;