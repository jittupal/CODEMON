const express = require("express");
const Courses = require("../controllers/course-controller");
const router = express.Router();

router.route("/course").get(Courses);

module.exports = router;