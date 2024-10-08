const express = require("express");
const path = require("path");
const discosRouter = require("./src/routes/discosRouter");
const artistasRouter = require("./src/routes/artistasRouter");
const generosRouter = require("./src/routes/generosRouter");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use("/discos", discosRouter);
app.use("/artistas", artistasRouter);
app.use("/generos", generosRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
