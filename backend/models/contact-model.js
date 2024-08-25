const mongoose = require("mongoose");
const validator = require("validator");

const contschema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    message: {
        type: String,
        required: true
    }
});

const contact = new mongoose.model("contact", contschema);

module.exports = contact;