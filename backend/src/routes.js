const express = require("express");
const multer = require("multer");
const path = require("path");
const { celebrate, Segments, Joi } = require("celebrate");

const AlunosController = require("./controllers/AlunosController");
const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/");
  },
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    cb(null, originalname);
  },
});

const upload = multer({ storage });

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
      fotoUrl: Joi.string().empty(),
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

routes.post(
  "/aluno/foto",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  upload.single("avatar"),
  function (req, res, next) {
    return AlunosController.uploadFoto(req, res);
  }
);

module.exports = routes;
