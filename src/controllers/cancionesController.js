const db = require("../database/models");
const sequelize = db.sequelize;


const cancionesController = {
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

}

module.exports = cancionesController;