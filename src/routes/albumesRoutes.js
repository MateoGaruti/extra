
const express = require("express");
const router = express.Router();
const albumesController = require("../controllers/albumesController");








router.get("/albumes/crear",albumesController.add);
router.post("/albumes/crear",albumesController.create);


module.exports = router;