const { Router } = require("express");
const artistasRouter = Router();

artistasRouter.get("/", (req, res) => {});
artistasRouter.get("/:id", (req, res) => {});
artistasRouter.post("/", (req, res) => {});
artistasRouter.delete("/:id", (req, res) => {});

module.exports = artistasRouter;
