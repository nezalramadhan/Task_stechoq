const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TaskStechoq", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
