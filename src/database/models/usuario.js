module.exports = function (sequelize, DataTypes) {
    let alias = "usuario";
    let cols = {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        email:
        {
            type: DataTypes.STRING
        },
        clave: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.INTEGER
        },
        superadmin: {
            type: DataTypes.INTEGER
        },
        idAcademia: {
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tablename: "usuario",
        timestamps: false
    }

    let usuario = sequelize.define(alias, cols, config);


    usuario.associate = function (models) {
        usuario.hasMany(models.venta, {     // consultar a que corresponde
            as: "ventas",
            foreignKey: "idUsuario"
        });


        usuario.belongsTo(models.academia, {
            as: "academia",
            foreignKey: "idAcademia"
        });

        usuario.hasMany(models.curso, {
            as: "curso",
            foreignKey: "idAdmin"
        });
    }

    return usuario
}