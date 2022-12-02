module.exports = (sequelize, dataTypes) => {
    let alias = 'Canciones';
    let cols = {

        titulo: {
            type: dataTypes.STRING
        },
        duracion: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'canciones',
        timestamps: false
    };
    const canciones = sequelize.define(alias, cols, config)

    return canciones
}