module.exports = (sequelize, dataTypes) => {
    let alias = 'Canciones';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'artistas',
        timestamps: false
    };
    const artistas = sequelize.define(alias, cols, config)

    return artistas
}