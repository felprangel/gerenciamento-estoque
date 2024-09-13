const pool = require("./pool");

async function buscaTodosOsArtistas() {
  const { rows } = await pool.query(
    "SELECT id, nome, discos, data_criacao FROM artistas"
  );
  return rows;
}

async function buscaTodosOsGeneros() {
  const { rows } = await pool.query(
    "SELECT id, nome, data_criacao FROM generos"
  );
  return rows;
}

module.exports = {
  buscaTodosOsArtistas,
  buscaTodosOsGeneros,
};
