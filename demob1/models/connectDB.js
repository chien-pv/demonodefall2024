const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("demonodefall2024", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
