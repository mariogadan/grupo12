module.exports = function (sequelize, DataTypes) {

    let alias = "tipoCurso";

    let cols = {
        idTipoCurso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    }


    let config = {
        tablename: "tipoCurso",
        timestamps: false
    }

    let tipoCurso = sequelize.define(alias, cols, config);

    tipoCurso.associate = function (models) {
        tipoCurso.hasMany(models.curso, {
            as: "curso",
            foreignKey: "idTipoCurso"
        });

    }

    return tipoCurso
}