const express = require("express");
const admincontrol = require("../controllers/admin-controller");
// const getAllContacts = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, admincontrol.deleteUserById);
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, admincontrol.deleteContactById);
router.route("/users").get(authMiddleware ,adminMiddleware, admincontrol.getAllUsers);
router.route("/users/:id").get(authMiddleware ,adminMiddleware, admincontrol.getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, admincontrol.updateUserById);
router.route("/contacts").get(authMiddleware, adminMiddleware, admincontrol.getAllContacts);


module.exports = router;