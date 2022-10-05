const path = require("path");

const controlador = {
  producto: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/products/producto"));
  },
  carrito: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/products/carrito"));
  },
};
module.exports = controlador;
