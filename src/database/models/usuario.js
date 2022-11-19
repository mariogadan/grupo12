module.exports = function (sequelize, DataTypes) {
    let alias = "usuario";
    let cols = {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        clave: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen: {
            type: DataTypes.STRING,
        },
        admin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        superadmin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idAcademia: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "usuario",
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