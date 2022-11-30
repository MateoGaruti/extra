const {Router} = require("express");
const route = Router("");
const controller = require ("../controllers/artistasController")



route.get ("/artistas/nuevo",controller.create)//crea artista nuevo //por ahora no mirar
route.post ("/artistas/guardar",controller.save)// guardar al artista nuevo en el JSON //por ahora no mirar


route.get ("/artistas",controller.index)//muestra el listado de artistas creados y guardados en el JSON // FUNCIONA BIEN 
route.get ("/artistas/detalle/:artista",controller.show)//MOSTRARIA LOS DETALLES PERO NO LO HACE //SOLUCIONAR

//route.get ("/artistas/genero?",controller.show)//genero
//route.get ("/artistas/detalle/:nombre",controller.show)


//el editar
route.get ("/artistas/editar/:artista",controller.edit)
module.exports = route;













