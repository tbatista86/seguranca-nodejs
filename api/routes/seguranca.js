const { Router } = require("express");
const SegurancaControlles = require("../controllers/segurancaController");

const router = Router();

router.post("/seguranca/acl", SegurancaControlles.cadastrarAcl);

module.exports = router;
