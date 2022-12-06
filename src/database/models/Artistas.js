module.exports = (sequelize, dataTypes) => {
    let alias = 'Artista';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'artistas',
        timestamps: false
    };
    const Artista = sequelize.define(alias, cols, config)
    //asociacion
    Artista.associate = function (models){ 
        Artista.hasMany(models.Cancion,{ //  busca el id dentro del modelo de canciones
            as:"canciones",
            foreignKey:"artista_id",//la foreignKey va a buscar el id dentro del artista 
            otherkey: "id"
        }) 
    }
    return Artista
}