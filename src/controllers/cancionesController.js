const {all, one} = require ("../models/cancionesModel.js");

const controller = {
    
    index: (req, res) =>{
        let canciones = all()
        
        if (req.params.canciones){
            canciones = canciones.filter (e => e.canciones == req.params.canciones)
            return res.render ("listadoCanciones", {canciones})
        }
     
        return res.render ("listadoCanciones",{canciones})
    },
     
    show: (req, res) =>{
        let cancion = one(req.params.nombre)
        if (cancion){
            return res.render (canciones)        
        }
        return res.send ("no hay artista con dicho nombre") 

    }
}

module.exports = controller