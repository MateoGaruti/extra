module.exports = (sequelize, dataTypes) => {
    let alias ="artista" /*con que tabla se va a comunicar*/
    let cols = {
         id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre:{
            type: dataTypes.STRING
        },
        apellido:{
            type: dataTypes.STRING
        }, 
        genero:{
            type: dataTypes.STRING
        }    
    }
    
    let config = {
        tableName: "artistas", /*con que tabla se va a comunicar con la db*/
        timestamps: false,
    }
    const artistas = sequelize.define(alias,cols,config)
    return artistas;
}
