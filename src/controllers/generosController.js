const db = require("../database/models");
const sequelize = db.sequelize;


const generosController = {
    lista: (req, res) => {
        db.Genero.findAll()
            .then(generos => {
                res.render("generosListado.ejs", {generos})
            })
    },
    detalle: (req, res) => {
        db.Genero.findByPk(req.params.id)
            .then(generos => {
                res.render("generosDetalle.ejs", {generos});
            });
    },
    add: (req, res) => {
        res.render("generosNuevo")

    },
    create: (req, res) =>{ //el add me va a mostar el formualario que crea el el artista nuevo
        const save = db.Genero.create({
            name: req.body.nombre
        })
        
        const exito = data => res.redirect ("/generos")
        const error = error => console.log (error)
        return save.then(exito).catch(error)
        
        
    }                        
}

module.exports = generosController;