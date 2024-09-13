const db = require("../db/queries");

async function buscaTodosOsGeneros(req, res) {
  const generos = db.buscaTodosOsGeneros();
  res.status(200).json(generos);
}

async function criaGenero(req, res) {}

async function deletaGenero(req, res) {}

module.exports = {
  buscaTodosOsGeneros,
  criaGenero,
  deletaGenero,
};
