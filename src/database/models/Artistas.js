module.exports = (sequelize, dataTypes) => {
    let alias = 'Artista';
    let cols = {
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
    const artistas = sequelize.define(alias, cols, config)

    return artistas
}