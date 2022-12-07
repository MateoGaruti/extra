const db = require("../database/models");
const sequelize = db.sequelize;
const { validationResult } = require("express-validator");
const {unlinkSync} = require('fs') 
const {resolve} = require('path')
const { Op } = require("sequelize"); 




const cancionesController = {
    lista: (req, res) => {
        db.Cancion.findAll({})
        .then(function(canciones){ 
            return res.render("cancionesListado.ejs", {canciones})
        })
        .catch(error => res.send(error))
    },  
    detalle: (req, res) => {
        db.Cancion.findByPk(
            req.params.id 
        ) 
        .then(function(canciones){ 
            return res.render("cancionesDetalle.ejs", {canciones})
        })
        .catch(error => res.send(error))
    },
    add: (req, res) => {
        res.render("cancionesNuevo")

    },
    create: (req, res) =>{ //el add me va a mostar el formualario que crea el el Canciones nuevo
        const save = db.Cancion.create({
            titulo: req.body.titulo, 
            duracion: req.body.duracion
        })
      
        const exito = data => res.redirect ("/canciones")
        const error = error => console.log (error)
        return save.then(exito).catch(error)

    },
    editar: (req, res) => {
        db.Cancion.findByPk(req.params.id)
        .then(function (canciones){
            return res.render("cancionesEditar",{canciones});
        })
        .catch(error => res.send(error))
    },
    
    
    update: (req, res) => {
             try {
            let canciones =  db.Cancion.findByPk(req.params.id)
             db.canciones.update({
                titulo: req.body.titulo,
                duraicon: req.body.duracion,
                artista_id:req.body.artistas,
                album_id: req.body.nombre,
                genero_id: req.body.name,
            }, {
                where: {id: req.params.id}
            })
             canciones.addArtista(req.body.artistas)
            return res.redirect("/canciones" + req.params.id)
        } catch (error) {
            res.send(error)
        }

    },
    destroy: (req, res) => {
        console.log(req.params.id);
        db.Cancion.destroy({
            where: {
                id: req.params.id
            }
        }).then((canciones) => {
            console.log(canciones);
            delete req.session.canciones;
            return res.redirect("/canciones");
        }).catch(error => res.send(error))
        
    },                        
}

module.exports = cancionesController;





