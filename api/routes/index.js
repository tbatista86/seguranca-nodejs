const bodyParser = require("body-parser");

const auth = require("./authRoute");
const produto = require("./produtoRoute");
const usuarios = require("./usuariosRoute");
const role = require("./role");
const permissao = require("./permissaoRoute");
const seguranca = require("./seguranca");

module.exports = (app) => {
  app.use(bodyParser.json(), auth, produto, usuarios, role, permissao, seguranca);
};
