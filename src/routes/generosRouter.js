const { Router } = require("express");
const generosController = require("../controllers/generosController");
const generosRouter = Router();

generosRouter.get("/", generosController.buscaTodosOsGeneros);
generosRouter.post("/", generosController.criaGenero);
generosRouter.delete("/:id", generosController.deletaGenero);

module.exports = generosRouter;
