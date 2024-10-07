const bcrypt = require("bcryptjs");

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
