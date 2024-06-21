const Author = require("../authors/author-model");
const Book = require("./book-model");
const { Op } = require("sequelize");

const save = async (book) => {
  return Book.create(book);
};

const findAll = async (filter) => {
  const { title, authorId, publicationDate } = filter;

  return Book.findAll({
    include: [
      {
        model: Author,
        required: true,
      },
    ],
    where: {
      ...(title ? { title: { [Op.iLike]: `${title}%` } } : {}),
      ...(authorId ? { authorId } : {}),
      ...(publicationDate ? { publicationDate } : {}),
    },
  });
};

const findById = async (id) => {
  return Book.findOne({
    include: [
      {
        model: Author,
        required: false,
      },
    ],
    where: {
      id: id,
    },
  });
};

module.exports = {
  save,
  findAll,
  findById,
};
