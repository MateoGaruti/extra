const db = require("../database/models");
const { validationResult } = require("express-validator");
const {unlinkSync} = require('fs') 
const {resolve} = require('path')
const { Op } = require("sequelize"); 



const albumesController = {
    lista: (req, res) => {
        let search = req.query && req.query.search ? req.query.search : "" 
        db.Product.findAll({
            include: [{association: 'artistas'}],
            where:{
                name: {
                    [Op.like]: "%" + search + "%"
                }
            } 
        })
        .then(function(canciones){ 
            return res.render('canciones/lista', { canciones, search})
        })
        .catch(error => res.send(error))
    },
    detalle: (req, res) => {
        db.Genero.findByPk(req.params.id)
            .then(albumes => {
                res.render("albumesDetalle", {albumes});
            });
    },
    add: (req, res) => {
        res.render("albumesNuevo")

    },
    create: (req, res) =>{ //el add me va a mostar el formualario que crea el el artista nuevo
        const save = db.Albumes.create({
            
            nombre: req.body.nombre,
            duracion: req.body.duracion,
        })
        
        const exito = data => res.redirect ("/")
        const error = error => console.log (error)
        return save.then(exito).catch(error)
        
        
    },     
}

module.exports = albumesController;;