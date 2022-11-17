module.exports = function (sequelize, DataTypes) {
    let alias = "venta";
    let cols = {
        idVenta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto: {
            type: DataTypes.INTEGER
        },
        fecha: {
            type: DataTypes.DATE
        },
        idUsuario:
        {
            type: DataTypes.INTEGER
        },
        idCurso: {
            type: DataTypes.INTEGER
        }


    }

    let config = {
        tablename: "venta",
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