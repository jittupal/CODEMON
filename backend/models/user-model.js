// Import the mongoose library for MongoDB object modeling
const mongoose = require("mongoose");

// Import the validator library for data validation
var validator = require('validator');

// Import the bcrypt library for hashing passwords
const bcrypt = require("bcryptjs");

var jwt = require('jsonwebtoken');

// Define the schema for the user data
const userScheme = new mongoose.Schema({
    // Define the username field
    username : {
        type: String, // Data type is String
        required: true, // Field is required
        minlength: [6, "Username should have 6 characters"], // Minimum length of 6 characters
        maxlength: [10, "Username must be 10 characters"], // Maximum length of 10 characters
    },
    // Define the email field
    email : {
        type: String, // Data type is String
        required: true, // Field is required
        validate: [validator.isEmail, "Please enter a valid email address"], // Validate email format using validator library
    },
    // Define the phone field
    phone : {
        type: String, // Data type is String
        required: true, // Field is required
        maxlength: [10, "Phone number should be 10 digits"], // Maximum length of 10 characters
        minlength: [10, "Phone number must be 10 digits"], // Minimum length of 10 characters
    },
    // Define the password field
    password : {
        type: String, // Data type is String
        required: true, // Field is required
    },
    // Define the isAdmin field
    isAdmin : {
        type: Boolean, // Data type is Boolean
        default: false, // Default value is false
    }
});

// Define a pre-save hook to hash the user's password before saving
userScheme.pre('save', async function(next){
    // Get the current user document
    const user = this;

    // Check if the password field has been modified
    if (!user.isModified("password")) {
        next(); // Move to the next middleware
    }

    try {
        // Generate a salt and hash the password using bcrypt
        const saltRound = 5; // Number of salt rounds
        const hash_password = await bcrypt.hash(user.password, saltRound); // Hash the password
        user.password = hash_password; // Set the password to the hashed password
        next(); // Move to the next middleware
    } catch (error) {
        next(error); // Call the next middleware with an error if an error occurs
    }
});
// Define a new method called generateToken on the methods property of userScheme
userScheme.methods.generateToken = async function(){
    try {
      // Generate a JSON Web Token (JWT) containing user data: userId, email, isAdmin
      // The token is signed using the secret key stored in the environment variable JWT_SECRET_KEY
      // The token expires in 30 days
      return jwt.sign({
        userId: this._id.toString(), // Convert user's ID to string
        email: this.email,            // Store user's email
        isAdmin: this.isAdmin         // Store user's isAdmin status
      },
      process.env.JWT_SECRET_KEY,    // Sign the token using the secret key
      {
        expiresIn: "300d",            // Token expires in 30 days
      }
      );
    } catch (error) {
      // If any error occurs during token generation, log the error to the console
      console.error(error);
    }
  }
  

// Create a mongoose model based on the schema
const User = new mongoose.model("User", userScheme);

// Export the User model
module.exports = User;
