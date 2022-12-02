const db = require("../database/models");
const sequelize = db.sequelize;


const cancionesController = {
    lista: (req, res) => {
        db.Cancion.findAll()
            .then(canciones => {
                res.render("cancionesListado.ejs", {canciones})
            })
    },
    detalle: (req, res) => {
        db.Cancion.findByPk(req.params.id)
            .then(canciones => {
                res.render("cancionesDetalle.ejs", {canciones});
            });
    },
    add: (req, res) => {
        res.render("cancionesNuevo")

    },
    create: (req, res) =>{ //el add me va a mostar el formualario que crea el el Canciones nuevo
        const save = db.Cancion.create({
            
            titulo: req.body.titulo, //canciones
            duracion: req.body.duracion,
        })
        saves = db.Genero.create({ //agrega el Genero   
            name: req.body.name, 
        })
        saves = db.Artista.create({ //funciona artistas
            nombre: req.body.nombre,
            apellido:req.body.apellido,

        })
        const exito = data => res.redirect ("/canciones")
        const error = error => console.log (error)
        return save.then(exito).catch(error)
        return saves.then(exito).catch(error)
        
    }                        
}

module.exports = cancionesController;