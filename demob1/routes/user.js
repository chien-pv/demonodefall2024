const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users_controller");

router.get("/", UsersController.index);

module.exports = router;
