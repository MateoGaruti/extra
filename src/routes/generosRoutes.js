const express = require("express");
const router = express.Router();
const generosController = require("../controllers/generosController");

router.get("/generos", generosController.lista);
router.get("/generos/detalle/:id", generosController.detalle);


router.post("/generos/crear",generosController.create);
router.get("/generos/crear",generosController.add);



module.exports = router;




