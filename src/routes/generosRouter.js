const { Router } = require("express");
const generosRouter = Router();

generosRouter.get("/", (req, res) => {});
generosRouter.get("/:id", (req, res) => {});
generosRouter.post("/", (req, res) => {});
generosRouter.delete("/:id", (req, res) => {});

module.exports = generosRouter;
