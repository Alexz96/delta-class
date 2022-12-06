const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const AlunosController = require("./controllers/AlunosController");
const routes = express.Router();

routes.get("/alunos", AlunosController.index);

routes.post(
  "/alunos",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      endereco: Joi.string().required(),
      telefone: Joi.string().required().min(10),
      fotoUrl: Joi.string().required(),
    }),
  }),
  AlunosController.create
);

routes.put(
  "/aluno",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required(),
      nome: Joi.string(),
      endereco: Joi.string(),
      telefone: Joi.string().min(10),
      fotoUrl: Joi.string(),
    }),
  }),
  AlunosController.update
);

routes.delete(
  "/aluno",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  AlunosController.delete
);

module.exports = routes;
