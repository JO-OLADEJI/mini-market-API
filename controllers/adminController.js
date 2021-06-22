const Admin = require('../models/adminModel.js');
const { verifyAdmin } = require('../middlewares/verification.js');
const bcrypt = require('bcryptjs');



class AdminController {

  login = async (req, res) => {
    // logic for admin login
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.send(`email doesn't exists!`);
    }

    try {
      const validPass = await bcrypt.compare(password, user['password']);
      if (!validPass) {
        return res.send('invalid password!');
      }   
      res.json({ 'login': true });
    }
    catch (err) {
      res.send(err);
    }
    
  }


  signup = async (req, res) => {
    // logic for admin to create another admin
    const { email, password } = req.body;
    const oldUser = await Admin.findOne({ email });
    if (oldUser) {
      res.send('user already exists!');
    }

    const { value, error } = verifyAdmin(req.body);
    if (error) {
      return res.send(error.details[0].message);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const newAdmin = new Admin({
        email: email,
        password: hashedPassword
      });
      const save = await newAdmin.save();
      res.json(save);
    }
    catch (err) {
      res.send(err);
    }
  }

}



const adminController = new AdminController();
module.exports = {
  login: adminController.login,
  signup: adminController.signup
}