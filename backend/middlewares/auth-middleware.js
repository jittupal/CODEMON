const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Invalid token" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
  
    const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });
    // console.log(userData);
    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = authMiddleware;
