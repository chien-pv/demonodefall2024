const User = require("../models/user");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

class HomeController {
  static index(req, res) {
    res.render("pages/index", { user: req.session.user });
  }
  static async login(req, res) {
    let { email, password } = req.body;
    let user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      let isCheck = bcrypt.compareSync(password, user.password);
      if (isCheck) {
        let token = jwt.sign({ email }, "demoKey", {
          expiresIn: "20s",
        });
        res
          .status(200)
          .json({ accessToken: token, message: "Login thành công!!!" });
      } else {
        res
          .status(401)
          .json({ message: "Tài khoản hoặc mật khẩu không đúng !!!" });
      }
    } else {
      res
        .status(404)
        .json({ message: "Tài khoản hoặc mật khẩu không đúng !!!" });
    }
  }
}

module.exports = HomeController;

// index -> getall
// new -->show form new
// create --> tạo mới
// update --> update
// edit --> show form edit
// delete -- > delete
