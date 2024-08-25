const Course = require("../models/course-model");

const Courses = async (req, res) => {
    try {
        // const response = req.body;
        const response = await Course.find();
        if(!response){
            res.json({msg: "no response from course controller"});
            return;
        }
        return res.json(response);
        // console.log(" data send successfully");
        // return res.json(" data sent to server successfully");
    } catch (error) {
        console.log("Error from course controller file ", error);
    }
};

module.exports = Courses;