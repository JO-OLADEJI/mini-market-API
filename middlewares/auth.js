const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {

  const token = req.header('auth-token');
  if (!token) return res.json({ 'auth': false });

  try {
    const verified = jwt.verify(token, process.env.AUTH_SECRET_TOKEN);
    req.user = verified;
    next();
  }
  catch (error) {
    return res.json({ 'auth': false });
  }

}


module.exports = auth;