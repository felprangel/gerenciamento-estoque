const { Router } = require("express");
const artistasController = require("../controllers/artistasController");
const artistasRouter = Router();

artistasRouter.get("/", artistasController.getAllArtists);
artistasRouter.get("/:id", artistasController.getArtistById);
artistasRouter.post("/", artistasController.createArtist);
artistasRouter.delete("/:id", artistasController.deleteArtist);

module.exports = artistasRouter;
