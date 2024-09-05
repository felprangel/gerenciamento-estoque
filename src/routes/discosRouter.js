const { Router } = require("express");
const discosController = require("../controllers/discosController");
const discosRouter = Router();

discosRouter.get("/", discosController.buscaTodosOsDiscos);
discosRouter.get("/:id", discosController.buscaDiscoPorId);
discosRouter.get("/artistas/:id", discosController.buscaDiscosPorArtista);
discosRouter.get("/generos/:id", discosController.buscaDiscosPorGenero);
discosRouter.post("/", discosController.criaDisco);
discosRouter.delete("/:id", discosController.deletaDisco);

module.exports = discosRouter;
