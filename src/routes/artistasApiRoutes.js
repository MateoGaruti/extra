// NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO NO 

const {Router} = require('express');
const router = Router(); 



const apiArtistasRouter = require ("../controllers/api/ArtistasApi")
router.use("/artistas", apiArtistasRouter )

module.exports = router;