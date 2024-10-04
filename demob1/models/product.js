// const connectDB = require("../models/connect");
// const connection = connectDB();

// class Product {
//   static getDataByParams(q) {
//     let sql = `SELECT * FROM products WHERE name LIKE '%${q}%' `;
//     return new Promise((resolve, reject) => {
//       connection.query(sql, (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }
// }

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./connectDB");
const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true,
    // Other model options go here
  }
);

module.exports = Product;
