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
        
        const exito = data => res.redirect ("/artistas")
        const error = error => console.log (error)
        return save.then(exito).catch(error)
        
        
    },  
    // para abajo nuevo
    editar: (req, res) => {
        let artista = (req.params.artistas)
        res.render("artistas/edit",{ artista });
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
        console.log(req.params.id);
        db.Artista.destroy({
            where: {
                id: req.params.id
            }
        }).then((artistas) => {
            console.log(artistas);
            delete req.session.artistas;
            return res.redirect('/');
        }).catch(error => res.send(error))
         
    },
    perro: (req, res) => {
        res.render ("moviesEdit")
    }

}

module.exports = artistasController;