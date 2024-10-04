const Product = require("../../models/product");
const { resErrors, resData } = require("./common/common");
class ApiProductController {
  static async index(req, res) {
    try {
      let products = await Product.findAll();
      let message = "Get data sussesfully";
      resData(res, 200, message, products);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async show(req, res) {
    try {
      let id = req.params.id;
      let product = await Product.findByPk(id);
      let message = "Get data detail sussesfully";
      resData(res, 200, message, product);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async create(req, res) {
    try {
      let { name, description, image } = req.body;
      let data = await Product.create({ name, description, image });
      let message = "Create data detail sussesfully";
      resData(res, 201, message, data);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async delete(req, res) {
    try {
      let id = req.params.id;
      let data = await Product.destroy({
        where: {
          id,
        },
      });
      let message = "Delete data sussesfully";
      resData(res, 200, message, data);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async update(req, res) {
    try {
      let id = req.params.id;
      let { name, description, image } = req.body;
      let data = await Product.update(
        { name, description, image },
        {
          where: {
            id,
          },
        }
      );
      let message = "Update data sussesfully";
      resData(res, 201, message, data);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiProductController;
