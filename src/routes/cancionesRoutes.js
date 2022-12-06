const express = require("express");
const router = express.Router();
const cancionesController = require("../controllers/cancionesController");

router.get("/canciones", cancionesController.lista);
router.get("/canciones/detalle/:id", cancionesController.detalle);
router.post("/canciones/crear",cancionesController.create);
router.get("/canciones/crear",cancionesController.add);




module.exports = router;




