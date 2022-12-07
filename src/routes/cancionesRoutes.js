const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/canciones", cancionesController.lista);
router.get("/canciones/detalle/:id", cancionesController.detalle);

router.post("/canciones/crear",cancionesController.create);
router.get("/canciones/crear",cancionesController.add);

router.post("/eliminar/:id",cancionesController.destroy);
router.put("/canciones/editar/:id",cancionesController.update);
router.get("/canciones/editar/:id",cancionesController.editar)
//router.post("/guardar",cancionesController.save)



module.exports = router;




