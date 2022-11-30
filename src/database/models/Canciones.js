/*module.exports = (sequelize, dataTypes) => {
    let alias ="cancion" 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        titulo:{
            type: dataTypes.STRING
        },
        duracion:{
            type: dataTypes.INTERGER
        },
        created_at:{
            type: dataTypes.DATE
        },
        update_at:{
            type: dataTypes.DATE
        },
        genero_id:{
            type: dataTypes.INTERGER
        },
        album_id:{
            type: dataTypes.INTERGER
        },
        artista_id:{
            type: dataTypes.INTERGER
        },
    }
    let config = {
        tableName: "canciones", //con que tabla se va a comunicar con ld db
        timestamps:false
    }
    const canciones = sequelize.define(alias,cols,config)
    return canciones
    

}*/
