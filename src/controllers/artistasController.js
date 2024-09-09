const db = require("../db/queries");

async function buscaTodosOsArtistas(req, res) {
  const artistas = await db.buscaTodosOsArtistas();
  res.status(200).json(artistas);
}

async function criaArtista(req, res) {
  // criar um novo artista
}

async function deletaArtista(req, res) {
  // deletar um artista pelo id
}

module.exports = {
  buscaTodosOsArtistas,
  criaArtista,
  deletaArtista,
};
