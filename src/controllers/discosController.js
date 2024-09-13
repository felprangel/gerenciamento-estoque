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

async function criaDisco(req, res) {
  const { nome, artista_id, genero_id, estoque, preco, data_lancamento } =
    req.body;
  await db.criaDisco(
    nome,
    artista_id,
    genero_id,
    estoque,
    preco,
    data_lancamento
  );
  res.redirect("/discos");
}

async function deletaDisco(req, res) {
  const { id } = req.body;
  await db.deletaDisco(id);
  res.redirect("/discos");
}

module.exports = {
  buscaTodosOsDiscos,
  buscaDiscoPorId,
  buscaDiscosPorArtista,
  buscaDiscosPorGenero,
  criaDisco,
  deletaDisco,
};
