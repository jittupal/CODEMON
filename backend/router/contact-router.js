const express = require("express");
const router = express.Router();
const contactde = require("../controllers/contact-form");

router.route("/contact").post(contactde);

module.exports = router;