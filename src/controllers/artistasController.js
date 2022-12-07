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
        
        const exito = data => res.redirect ("/generos/crear")
        const error = error => console.log (error)
        return save.then(exito).catch(error)
        
        
    },  
    editar: (req, res) => {
        db.Artista.findByPk (req.params.id)
        .then (function (artistas) {
            return res,render ("artistas/edit",{ artistas })
            })
            .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.Artista.findByPk(req.params.id)
            .then(artista => {
                return db.Artista.update({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                },{
                    where: { id: req.params.id }
                })
            })
            .then(() => res.redirect("/editar" + req.params.id))
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        db.Artistas.destroy ({
            where:{
                id: req.params.id
            }
        })
    },
   
}

module.exports = artistasController;