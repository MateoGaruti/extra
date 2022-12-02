module.exports = (sequelize, dataTypes) => {
    let alias = 'Cancion';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        titulo:{
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        },
   
        created_at:{
            type: dataTypes.DATE,
            allowNull:true
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull:true
        },
        genero_id:{
            type: dataTypes.INTEGER
        },
        album_id:{
            type: dataTypes.INTEGER
        },
        artista_id:{
            type: dataTypes.INTEGER
        }
        
    };
    let config = {
        tableName: 'canciones',
        timestamps: false
        
    };
    const Cancion = sequelize.define(alias, cols, config)
    

    Cancion.associate = function(models){
        
        /*Cancion.belongsToMany(models.genero_id, {
            as: "generos",//con la que me quiero relacionar
            through: "genero",
            foreignKey:"canciones",
            otherKey:"album",
            timestamps:false
        });*/

        /*Cancion.belongsTo(models.Artista, {
            as: "category",
            foreignKey: "category_id",
            timestamps:false
        });*/
    }


    return Cancion
}