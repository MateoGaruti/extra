const express = require("express");
const router = express.Router();
const generosController = require("../controllers/generosController");

router.get("/generos", generosController.lista);
router.get("/generos/detalle/:id", generosController.detalle);
router.get("/generos/crear",generosController.add);
router.post("/generos/crear",generosController.create);

//nuevo probando
router.post("/artistas/crear",generosController.create);
router.get("/artistas/crear",generosController.add);


module.exports = router;




