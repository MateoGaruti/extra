const {all, one, generate, write} = require ("../models/artistasModel.js");

const controller = {
    
    index: (req, res) =>{
        let artistas = all()
        
        if (req.params.artistas){//si dentro de "req.params" exsiten los artistas. Me llaga como parameto un artista
            artistas = artistas.filter (e => e.artistas == req.params.artistas)
        }
        return res.render ("listado",{artistas}) //FUNCIONA BIEN
    },
        //INDEX FUNCIONA BIEN 
     
    show: (req, res) =>{
        let artistas = one(req.params.artistas)
        if (artistas){
        }
        return res.render ("detalle",{artistas:null})
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