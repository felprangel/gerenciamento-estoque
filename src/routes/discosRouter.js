const { Router } = require("express");
const discosRouter = Router();

discosRouter.get("/", (req, res) => {});
discosRouter.get("/:id", (req, res) => {});
discosRouter.post("/", (req, res) => {});
discosRouter.delete("/:id", (req, res) => {});

module.exports = discosRouter;
