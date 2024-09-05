const { Router } = require("express");
const artistasController = require("../controllers/artistasController");
const artistasRouter = Router();

artistasRouter.get("/", artistasController.buscaTodosOsArtistas);
artistasRouter.post("/", artistasController.criaArtista);
artistasRouter.delete("/:id", artistasController.deletaArtista);

module.exports = artistasRouter;
