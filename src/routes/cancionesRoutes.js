const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/canciones", cancionesController.lista);
router.get("/canciones/detalle/:id", cancionesController.detalle);
router.get("/canciones/crear",cancionesController.add);
router.get("/canciones/editar/:id",cancionesController.editar)

router.post("/canciones/crear",cancionesController.create);

router.put("/canciones/editar/:id",cancionesController.update);

router.delete("/eliminar/:id",cancionesController.destroy);
//router.post("/guardar",cancionesController.save)



module.exports = router;




