module.exports = function (sequelize, DataTypes) {
    let alias = "venta";
    let cols = {
        idVenta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        monto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        idUsuario:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCurso: {
            type: DataTypes.INTEGER,
            allowNull: false
        }


    }

    let config = {
        tableName: "venta",
        timestamps: false
    }


    let venta = sequelize.define(alias, cols, config);


    venta.associate = function (models) {
        venta.belongsTo(models.usuario, {
            as: "usuario",
            foreignKey: "idUsuario"
        });


        venta.belongsTo(models.curso, {
            as: "curso",
            foreignKey: "idCurso"
        });
    }

    return venta
}