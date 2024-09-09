const pool = require("./pool");

async function buscaTodosOsArtistas() {
  const { rows } = await pool.query(
    "SELECT id, nome, discos, data_criacao FROM artistas"
  );
  return rows;
}

module.exports = {
  buscaTodosOsArtistas,
};
