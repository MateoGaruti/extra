const {resolve} = require ("path")
const fs = require ("fs")
const Artistas = require("../database/models/Artistas")

let model = {
    all: function(){ 
        let file = resolve (__dirname,"../data","artistas.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },
    one: function(id){
        let all = model.all();
        return all.find (e => e.id == id)
    },
    generate: function (data){
        let all = model.all()
        let last = all.pop()
        let artista ={}
        artista.id = last.id + 1; 
        artista.nombre = data.nombre
        artista.apellido = data.apellido
        artista.genero = data.genero
        return artista
    },
    write: function(data){
        let file = resolve (__dirname,"../data","artistas.json")
        let json = JSON.stringify(data, null, 2)
        return fs.writeFileSync(file, json)
    },

}

module.exports = model