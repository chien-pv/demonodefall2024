const bcrypt = require("bcryptjs");
var validator = require("validator");
var _ = require("lodash");

const salt = bcrypt.genSaltSync(10);

const User = require("../models/user");

class UsersController {
  static index(req, res) {
    res.render("users/index");
  }
  static register(req, res) {
    res.render("users/register", { user: null });
  }
  static async create(req, res) {
    try {
      let { email, password } = req.body;
      email = _.trim(email);
      password = _.trim(password);

      let validation = {};
      let isvalidation = false;

      if (!validator.isEmail(email)) {
        validation.email = "Email không đúng định dạng!";
      }

      let islength = validator.isLength(password, { min: 5, max: 15 });

      password = bcrypt.hashSync(password, salt);
      let user = await User.create({ email, password });
      req.session.user = user;
      res.redirect("/");
    } catch (error) {
      res.render("users/register");
    }
  }
}

module.exports = UsersController;
