const { Router } = require("express");
const RoleControoler = require("../controllers/roleController");
const router = Router();

router
  .post("/role", RoleControoler.cadastrar)
  .get("/role", RoleControoler.buscarTodasRoles)
  .get("/role/:id", RoleControoler.buscarRolePorId)
  .delete("/role/:id", RoleControoler.deletarRole)
  .put("/role/:id", RoleControoler.editarRole);

module.exports = router;
