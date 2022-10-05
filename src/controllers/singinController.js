const path = require("path");

const controlador = {
  singin: (req, res) => {
    res.render(path.resolve(__dirname, "../../views/users/singin"));
  },
};
module.exports = controlador;
