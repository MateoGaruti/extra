module.exports = (sequelize, dataTypes) => {
    let alias = "Genero";
    let cols = {
        name: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: "generos",
        timestamps: false
    };
    const Genero = sequelize.define(alias, cols, config)

    return Genero
    
}