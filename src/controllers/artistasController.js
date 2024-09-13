const db = require("../db/queries");

async function buscaTodosOsArtistas(req, res) {
  const artistas = await db.buscaTodosOsArtistas();
  res.status(200).json(artistas);
}

async function criaArtista(req, res) {
  const { nome, discos } = req.body;
  await db.criaArtista(nome, discos);
  res.redirect("/artistas");
}

async function deletaArtista(req, res) {
  const { id } = req.params;
  await db.deletaArtista(id);
  res.redirect("/artistas");
}

module.exports = {
  buscaTodosOsArtistas,
  criaArtista,
  deletaArtista,
};
