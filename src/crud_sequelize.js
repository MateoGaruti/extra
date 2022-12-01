const { createReadStream } = require("fs")
const db = require ("./database/models/index")
//const { save } = require("./src/controllers/artistasController")



//create creacion 
const create = function (data){
    const save = db.Artista.create({
        nombre: data.nombre,
        apellido: data.apellido,
        //para la duracion de la cancion utilizo lo de abajo para poder aclararle que es un numero lo que le llega, ademas si llega nulo o no es asi, lo parsea, sino ranking es cero
        //esto es una promesa, asi que hay que armar un caht y un then
        //duracion: data.duracion != "" || data.duracion != null ? parseInt(data.duracion) : 0,


    })
    
    
    const exito = data => res.send (data)
    const error = error => console.log (error)
    
    return save.then(exito).catch(error)
}

create ({
    nombre: "mateo",
    apellido: "garuti",
})



//const update = function (){}

//const destroy = function (){}