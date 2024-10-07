const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users_controller");

function checklogin(req, res, next) {
  if (req.session.user) {
    res.redirect("/");
  } else {
    next();
  }
}

router.get("/", UsersController.index);
router.get("/register", checklogin, UsersController.register);
router.post("/register", UsersController.create);

module.exports = router;
