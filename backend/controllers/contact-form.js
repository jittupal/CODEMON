const contact = require("../models/contact-model");

const contactde = async (req, res, next)=>{
  try {
    // res.send("hii contact form")
    const response = req.body;
    // console.log(response);
    await contact.create(response);
    return res.json({msg: "message send successfully from backend"});
    } catch (error) {
      // error.msg = "Contact form error";
      // next(error);
      console.log("message not send");
  }
};

module.exports = contactde;