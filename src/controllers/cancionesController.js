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
                
            titulo: req.body.titulo, //canciones no funciona
            duracion: req.body.duracion
        })
      
        const exito = data => res.redirect ("/canciones")
        const error = error => console.log (error)
        return save.then(exito).catch(error)

    },                        
}

module.exports = cancionesController;