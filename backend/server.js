// Load environment variables from a .env file
require("dotenv").config();

// Import the express module to create a web server
const express = require("express");

// Import the router object from the auth-router file to handle authentication routes
const authroute = require("./router/auth-router");
const contactroute = require("./router/contact-router");
const courseroute = require("./router/course-router");
const adminroute = require("./router/admin-router");

// Import the connectdb function from the db file in the utils directory to establish a connection to the database
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-handler");
const cors = require("cors");


// Create an instance of the express application
const app = express();

const corsoptions = {
    origin: "https://codemon-1.onrender.com",
    methods: "PUT, POST , DELETE, GET, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsoptions))
// Add middleware to parse incoming JSON requests
app.use(express.json());

// Mount the router object at the /api/auth path to handle authentication-related routes
app.use("/api/auth", authroute);
app.use("/api/form", contactroute);
app.use("/api/data", courseroute);
app.use("/api/admin", adminroute);

app.use(errorMiddleware)

// Define the port number on which the server will listen for incoming requests
const PORT = 5000;

// Connect to the database and start the server
connectdb().then(() => {
    // Start the server listening on the specified port
    app.listen(PORT, () => {
        // Log a message indicating that the server is running
        console.log(`Your server is running at PORT ${PORT}`);
    });
});
