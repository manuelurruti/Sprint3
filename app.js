const productosRoutes = require("./src/routes/productosRoutes");
const mainRoutes = require("./src/routes/mainRoutes");
const singinRoutes = require("./src/routes/singinRoutes");

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "./public")));

app.use("/", mainRoutes); //se concatenan las rutas del primer y segundo parámetro

app.use("/producto", productosRoutes);

app.use("/users", singinRoutes);

app.use("*", function (req, res) {
  res.send("Ruta equivocada");
});

app.listen(3001, () => {
  console.log("servidor corriendo puerto 3001");
});
