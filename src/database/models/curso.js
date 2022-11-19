module.exports = function (sequelize, DataTypes) {
    let alias = "curso";

    let cols = {
        idCurso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fechaBaja: {
            type: DataTypes.DATE
        },
        imagen:
        {
            type: DataTypes.STRING,
        },
        fechaInicioCurso: {
            type: DataTypes.DATE,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        vacantesTotales: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTipoCurso: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idAdmin: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    let config = {
        tableName: "curso",
        timestamps: false
    }

    let curso = sequelize.define(alias, cols, config);

    curso.associate = function (models) {
        curso.hasMany(models.venta, {
            as: "venta",
            foreignKey: "idCurso"
        });


        curso.belongsTo(models.curso, {
            as: "tipo_curso",
            foreignKey: "idTipoCurso"
        });

        curso.belongsTo(models.curso, {
            as: "usuario",
            foreignKey: "idAdmin"
        });
    }

    return curso
}
