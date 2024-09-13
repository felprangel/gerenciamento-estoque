const pool = require("./pool");

async function buscaTodosOsArtistas() {
  const { rows } = await pool.query(
    "SELECT id, nome, discos, data_criacao FROM artistas"
  );
  return rows;
}

async function criaArtista(nome, discos) {
  await pool.query("INSERT INTO artistas (nome, discos) VALUES ($1, $2)", [
    nome,
    discos,
  ]);
}

async function buscaTodosOsGeneros() {
  const { rows } = await pool.query(
    "SELECT id, nome, data_criacao FROM generos"
  );
  return rows;
}

async function buscaTodosOsDiscos() {
  const { rows } = await pool.query(
    "SELECT id, nome, artista_id, genero_id, estoque, preco, data_lancamento FROM discos"
  );
  return rows;
}

module.exports = {
  buscaTodosOsArtistas,
  criaArtista,
  buscaTodosOsGeneros,
  buscaTodosOsDiscos,
};
