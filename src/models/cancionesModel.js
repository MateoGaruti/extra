const {resolve} = require ("path")
const fs = require ("fs")

let model = {
    all: function(){ 
        let file = resolve (__dirname,"../data","canciones.json")
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    },
    one: function(id){
        let all = model.all();
        return all.find (e => e.id == id)
    }

}

module.exports = model