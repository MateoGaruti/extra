const {Router} = require("express");
const router = Router("");

router.get ("/", (req, res)=> {
    res.render ("index", {titulo: "musicando"})
    
})







module.exports = router;