const { Op } = require("sequelize");

const Product = require("../models/product");

const User = require("../models/user");

class ProductsController {
  static async index(req, res) {
    let users = await User.findAll();
    console.log(users);
    let name = "Products";
    let q = req.query.q;
    if (!q) q = "";

    try {
      let data = await Product.findAll({
        where: {
          name: {
            [Op.like]: `%${q}%`,
          },
        },
      });
      res.render("products/index", { name, products: data, err: "", q });
    } catch (error) {
      console.log(error);
      res.render("products/index", {
        name,
        products: [],
        err: error.sqlMessage,
        q,
      });
    }
  }

  static create(req, res) {
    let image = req.file ? `uploads/${req.file.filename}` : "";
    let { name, description } = req.body;

    let sql = `INSERT INTO products (name, description, image) VALUES ('${name}', '${description}','${image}')`;
    connection.query(sql, (err, data) => {
      if (err) {
        res.render("products/new");
      } else {
        res.redirect("/products");
      }
    });
  }

  static new(req, res) {
    res.render("products/new");
  }

  static async delete(req, res) {
    let id = req.params.id;
    let result = await Product.destroy({
      where: {
        id,
      },
    });

    console.log(result);
    res.redirect("/products");
  }
}

module.exports = ProductsController;
