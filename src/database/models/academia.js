module.exports = function (sequelize, DataTypes) {
    let alias = "academia";
    let cols = {
        idAcademia: {
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
        tableName: "academia",
        timestamps: false
    }



    let academia = sequelize.define(alias, cols, config);



    academia.associate = function (models) {

        academia.hasMany(models.usuario, {
            as: "usuarios",
            foreignKey: "idAcademia"
        });

    }

    return academia;

}


