const express = require("express");
const router = express.Router();

const HomeController = require("../../controllers/home_controller");

router.post("/login", HomeController.login);

module.exports = router;
