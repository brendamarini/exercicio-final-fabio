const Sequelize = require("sequelize");
const database = require("../../../config/db");
const Author = require("../authors/author-model");

const Book = database.sequelize.define(
  "Book",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: "id",
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "titulo",
    },
    authorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "autor_id",
      references: {
        model: "Author",
        key: "id",
      },
    },
    publicationDate: {
      type: Sequelize.DATE,
      field: "data_publicacao",
    },
  },
  {
    timestamps: false,
    tableName: "tb_livro",
  }
);

Book.belongsTo(Author, { foreignKey: "authorId" });

module.exports = Book;
