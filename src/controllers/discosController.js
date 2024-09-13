const db = require("../db/queries");

async function buscaTodosOsDiscos(req, res) {
  const discos = db.buscaTodosOsDiscos();
  res.status(200).json(discos);
}

async function buscaDiscoPorId(req, res) {
  const { id } = req.query;
  const disco = db.buscaDiscoPorId(id);
  res.status(200).json(disco);
}

async function buscaDiscosPorArtista(req, res) {
  const { artista } = req.query;
  const discos = db.buscaDiscosPorArtista(artista);
  res.status(200).json(discos);
}

async function buscaDiscosPorGenero(req, res) {
  const { genero } = req.query;
  const discos = db.buscaDiscosPorGenero(genero);
  res.status(200).json(discos);
}

async function criaDisco(req, res) {}

async function deletaDisco(req, res) {}

module.exports = {
  buscaTodosOsDiscos,
  buscaDiscoPorId,
  buscaDiscosPorArtista,
  buscaDiscosPorGenero,
  criaDisco,
  deletaDisco,
};
