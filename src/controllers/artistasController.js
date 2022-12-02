const db = require("../database/models");
const sequelize = db.sequelize;


const artistasController = {
    lista: (req, res) => {
        db.Artista.findAll()
            .then(artistas => {
                res.render("listado.ejs", {artistas})
            })
    },
    detalle: (req, res) => {
        db.Artista.findByPk(req.params.id)
            .then(artistas => {
                res.render("artistasDetalle.ejs", {artistas});
            });
    },
    add: (req, res) => {
        res.render("artistasNuevo")

    },
    create: (req, res) =>{ //el add me va a mostar el formualario que crea el el artista nuevo
        const save = db.Artista.create({
            
            nombre: req.body.nombre,
            apellido: req.body.apellido,
        })
        const saves = db.Genero.create({ //agrega el genero a la base de datos.  
            name: req.body.genero, 
        })
        const exito = data => res.redirect ("/artistas")
        const error = error => console.log (error)
        
        return save.then(exito).catch(error)
        return saves.then(exito).catch(error)
    }                        
}

module.exports = artistasController;