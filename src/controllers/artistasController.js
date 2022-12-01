const {all, one, generate, write} = require ("../models/artistasModel.js");

const controller = {
    
    index: (req, res) =>{
        let artistas = all()
        
        if (req.params.genero){//si dentro de "req.params" exsiten los artistas. Me llaga como parameto un artista
            artistas = artistas.filter (e => e.generos == req.params.genero)
            return res.render ("listado",{artistas}) //FUNCIONA BIEN
        }
        return res.render ("listado",{artistas}) //FUNCIONA BIEN
    },
        
    show: (req, res) =>{
        let artista = one(req.params.artista)
        if (artista){
            return res.render ("detalle",{artista})//FUNCIONA BIEN
        }
          return res.render ("detalle",{artista:null})//FUNCIONA BIEN
    },    

    
    create: (req,res) =>{
        return res.render ("create")
    },
    save:(req, res) =>{
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write (todos)
        return res.redirect ("/artistas")   
    },
    edit: (req, res) =>{
        let artista = one(req.params.artista)

        return res.render("edit",{
            artista
        })
    }
}

module.exports = controller















/*const db = require("../database/models/index")

const create = function (req,res){
    db.artista.create({
        name: req.body.name,
        apellido: req.body.name,
    })
}*/












/*const db = require("../database/models/index")
const list = (req, res) =>{
    const all = db.genero.findAll ()
    all.then().catch(err) 
    return res.render ("genero")

}


module.exports = {list}*/