const Sequelize = require("sequelize");
const sequelize = require("../config/config");
const db = {
  Sequelize,
  sequelize,
};

module.exports = db;
