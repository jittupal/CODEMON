// const express = require("express");

// const router = express.Router();
// // const home = require('../controllers/auth-controller')
// // const register = require("../controllers/auth-controller");
// const control = require("../controllers/auth-controller");
// // router.get("/", (req, res)=>{
// //     res.send("We are on server side using router");
// // });

// // router.route("/").get((req, res) =>{
// //     res.send("you are on home page using router");
// // });

// router.route("/").get(control.home);

// router.route("/register").post(control.register);

// module.exports = router;


// Import the express module
const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user-model");


const validateSignup = [
    body("username").isLength({ min: 6, max: 10 }).withMessage("Username should be between 6 and 10 characters"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("phone").isLength({ min: 10, max: 10 }).withMessage("Phone number should be 10 digits"),
    body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters long"),
  ];

  const validateLogin = [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 6 }).withMessage("Password should be at least 6 characters long"),
  ];

// Create an instance of an Express router
const router = express.Router();

// Import the functions from the auth-controller module
const control = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");

// Define a route for handling GET requests to the root URL "/"
router.route("/").get(control.home);

// Define a route for handling POST requests to the "/register" URL
router.route("/register").post(validateSignup, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // If validation passes, call the controller's register function
    control.register(req, res);
  });

  router.route("/login").post(validateLogin, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    control.login(req, res);
  });

router.route("/user").get(authMiddleware, control.user);

// Export the router to make it available for use in other files
module.exports = router;