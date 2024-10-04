class HomeController {
  static index(req, res) {
    res.render("pages/index");
  }
}

module.exports = HomeController;

// index -> getall
// new -->show form new
// create --> tạo mới
// update --> update
// edit --> show form edit
// delete -- > delete
