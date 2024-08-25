// Require the User model defined in "../models/user-model"
const User = require("../models/user-model");

// Require the bcrypt library for hashing passwords
const bcrypt = require("bcryptjs");

// Define the home controller function
const home = async (req, res) => {
  try {
    // Send a response indicating that the user is on the home page
    res.send("you are home page by controller");
  } catch (error) {
    // Log any errors that occur
    console.log(error);
  }
};

// Define the register controller function
const register = async (req, res, next) => {
  try {

    // Extract username, email, phone, and password from the request body
    const { username, email, phone, password } = req.body;

    // Check if a user with the provided email already exists
    const emailExists = await User.findOne({ email: email });

    // Check if a user with the provided phone number already exists
    const phoneExists = await User.findOne({ phone: phone });

    // If a user with the provided email exists, return an error message
    if (emailExists) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    // If a user with the provided phone number exists, return an error message
    if (phoneExists) {
      return res.status(400).json({ error: "Phone number is already taken" });
    }

    // // Hash the password using bcrypt
    // const saltRound = 10; // Define the number of salt rounds
    // const hashPassword = await bcrypt.hash(password, saltRound);

    // Create a new user with the provided details
    const userCreated = await User.create({
      username,
      email,
      phone,
      password, // Store the hashed password in the database
    });

    // Send a JSON response indicating successful user creation
    res.json({
      message: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // Log any errors that occur
    error.message = "please Fill the input correctly";
    // next(error);
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    // Fetch the data from req body
    const { email, password } = req.body;

    // Check if the email exists
    const userExist = await User.findOne({ email: email });

    // If user does not exist, return an error
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Email or Password!" });
    }

    // Compare the entered password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    // If passwords match, log in the user
    if (isPasswordValid) {
      res.json({
        message: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      // If passwords don't match, return an error
      return res.status(400).json({ message: "Invalid Email or Password!" });
    }
  } catch (error) {
    // Log any errors that occur
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const user = async (req, res) =>{

 try {
  const userData = req.user;
  //// 
  return res.json({userData});
  // res.send("Hii i am user you have just created");
 } catch (error) {
  console.log(error);
 }

}

// Export the home and register controller functions
module.exports = { home, register, login, user };
