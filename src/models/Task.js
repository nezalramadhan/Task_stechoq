const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // Optional, jika Anda ingin menggunakan nama tabel yang persis sesuai dengan nama model
  }
);

module.exports = Task;

(async () => {
  await sequelize.sync();
})();
