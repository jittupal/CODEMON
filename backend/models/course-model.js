const {Schema, model} = require("mongoose");

const courseSchema = new Schema({
    course: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    }
});

const Course = new model("course", courseSchema);

module.exports = Course;