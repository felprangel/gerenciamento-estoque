const db = require("../db/queries");

async function buscaTodosOsGeneros(req, res) {
  const generos = db.buscaTodosOsGeneros();
  res.status(200).json(generos);
}

async function criaGenero(req, res) {
  const { nome } = req.body;
  db.criaGenero(nome);
  res.redirect("/generos");
}

async function deletaGenero(req, res) {}

module.exports = {
  buscaTodosOsGeneros,
  criaGenero,
  deletaGenero,
};
