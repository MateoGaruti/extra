const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/canciones", cancionesController.lista);
router.get("/canciones/detalle/:id", cancionesController.detalle);
router.get("/canciones/crear",cancionesController.add);
router.post("/canciones/crear",cancionesController.create);



module.exports = router;




