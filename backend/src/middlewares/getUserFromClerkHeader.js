const User = require('../models/User');

module.exports = async function(req, res, next) {
  const clerkId = req.headers['x-clerk-user-id'];
  if (!clerkId) {
    req.user = null;
    return next();
  }
  // find or create user record
  let user = await User.findOne({ clerkId });
  if (!user) {
    // create minimal record (frontend will fill more via profile endpoint)
    user = await User.create({ clerkId });
  }
  req.user = user;
  next();
};
