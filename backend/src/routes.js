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

module.exports = routes;
