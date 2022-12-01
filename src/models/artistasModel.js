const {resolve} = require ("path")
const fs = require ("fs")
const Artistas = require("../database/models/Artistas")

let model = {
    all: function(){ //cuando requiero ALL requiero a todos los artistas
        let file = resolve (__dirname,"../data","artistas.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data) // aca guarda los archivos
    },
    one: function(id){ //cuando requiero ONE requiero a un solo artista
        let all = model.all();
        return all.find (e => e.id == id)
    },
    generate: function (data){ //genero artistas
        let all = model.all()
        let last = all.pop()
        let artista ={}
        artista.id = last.id + 1; 
        artista.nombre = data.nombre
        artista.apellido = data.apellido
        artista.genero = data.genero
        return artista
    },
    write: function(data){ //guardo los artistas
        let file = resolve (__dirname,"../data","artistas.json")
        let json = JSON.stringify(data, null, 2)
        return fs.writeFileSync(file, json)
    },

}

module.exports = model