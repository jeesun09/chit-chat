const express = require('express');
const { registerUser, loginUser } = require("../controllers/user.controllers");


const router = express.Router();

router.route('/registeruser').post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;