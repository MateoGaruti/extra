const {Router} = require("express");
const router = Router("");

const controller = require ("../controllers/cancionesController")


router.get ("/canciones/:titulo?",controller.index)

router.get ("/canciones/detalle/:duracion",controller.show)
module.exports = router 