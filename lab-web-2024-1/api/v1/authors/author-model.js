const Sequelize = require("sequelize");
const database = require("../../../config/db");

const Author = database.sequelize.define(
  "Author",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "nome",
    },
  },
  {
    timestamps: false,
    tableName: "tb_autor",
  }
);

module.exports = Author;
