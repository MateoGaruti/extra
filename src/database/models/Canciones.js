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
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        album_id:{
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        artista_id:{
            type: dataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        }
        
    };
    let config = {
        tableName: 'canciones',
        timestamps: false
        
    };
    const Cancion = sequelize.define(alias, cols, config)
    

    Cancion.associate = function(models){
        //genero
        Cancion.belongsTo(models.Genero, {
            as:"Genero",
            foreignKey:"genero_id",
            otherKey:"id",
        });
        //albumes
        Cancion.belongsTo(models.Albumes, {
            as: "Albumes",
            foreignKey: "album_id",
            otherKey: "id",
        });
         //artistas
         Cancion.belongsTo(models.Artista, {
            as: "Artista",
            foreignKey: "artista_id",
            otherKey: "id"
         });
    }


    return Cancion
}



