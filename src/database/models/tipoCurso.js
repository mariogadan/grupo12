module.exports = function (sequelize, DataTypes) {

    let alias = "tipoCurso";

    let cols = {
        idTipoCurso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }


    let config = {
        tableName: "tipoCurso",
        timestamps: false
    }

    let tipoCurso = sequelize.define(alias, cols, config);

    tipoCurso.associate = function (models) {
        tipoCurso.hasMany(models.curso, {
            as: "tipo_curso",
            foreignKey: "idTipoCurso"
        });

    }

    return tipoCurso
}