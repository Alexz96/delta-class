const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

// Importar controllers

const routes = express.Router();

routes.get("/teste", (req, res) => {
  console.log(req.body);
  res.json({ message: "Hello" });
});

module.exports = routes;
