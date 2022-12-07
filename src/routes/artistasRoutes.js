
const express = require("express");
const router = express.Router();
const artistasController = require("../controllers/artistasController");



router.get("/artistas", artistasController.lista);
router.get("/artistas/editar",artistasController.update);
router.get("/artistas/detalle/:id", artistasController.detalle);

router.get("/artistas/editar/:id",artistasController.editar)

router.post("/artistas/crear",artistasController.create);
router.get("/artistas/crear",artistasController.add);
router.post("/artistas/:id",artistasController.destroy);


module.exports = router;











