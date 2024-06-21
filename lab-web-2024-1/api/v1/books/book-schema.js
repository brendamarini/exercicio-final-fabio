const Joi = require("joi");

const createBookSchema = {
  payload: Joi.object({
    title: Joi.string().min(3).max(100).required(),
    authorId: Joi.number().integer().required(),
    publicationDate: Joi.date(),
  }),
};

const getById = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

const getBooks = {
  query: Joi.object({
    title: Joi.string().min(1),
    authorId: Joi.number().integer(),
    publicationDate: Joi.date(),
  }),
};

module.exports = {
  createBookSchema,
  getById,
  getBooks,
};
