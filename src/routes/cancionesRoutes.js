const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/canciones", cancionesController.lista);
router.get("/canciones/detalle/:id", cancionesController.detalle);

router.post("/canciones/crear",cancionesController.create);
router.get("/canciones/crear",cancionesController.add);

router.put("/canciones/editar",cancionesController.update);
router.get("/canciones/editar/:id",cancionesController.editar)
//router.post("/guardar",cancionesController.save)
router.post("/canciones/:id",cancionesController.destroy);



module.exports = router;




