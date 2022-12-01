const express = require('express');
const router = express.Router();
const artistasController = require("../controllers/artistasController");

router.get("/artistas", artistasController.lista);
router.get("/artistas/detalle/:id", artistasController.detalle);


module.exports = router;











