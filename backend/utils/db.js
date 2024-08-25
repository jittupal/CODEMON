// Import the mongoose module for MongoDB object modeling
const mongoose = require("mongoose");

// Define the URI for the MongoDB database connection
// In this case, it's retrieved from an environment variable using process.env
const URI = process.env.MONGODB_URI;

// Define a function named connectdb, which is an asynchronous function
const connectdb = async () => {
    try {
        // Attempt to establish a connection to the MongoDB database using the URI
        await mongoose.connect(URI);

        // If the connection is successful, log a success message
        console.log("Connection successful to database");
    } catch (error) {
        // If there's an error during the connection attempt, log the error message
        console.log("Database connection failed:", error);
    }
};

// Export the connectdb function to make it accessible from other modules
module.exports = connectdb;