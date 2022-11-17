module.exports = function (sequelize, DataTypes) {
    let alias = "curso";

    let cols = {
        idCurso: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },

        precio: {
            type: DataTypes.INTEGER
        },
        fechaCreacion: {
            type: DataTypes.DATE
        },
        fechaBaja: {
            type: DataTypes.DATE
        },
        imagen:
        {
            type: DataTypes.STRING
        },
        fechaInicioCurso: {
            type: DataTypes.DATE
        },
        descripcion: {
            type: DataTypes.TEXT
        },
        vacantesTotales: {
            type: DataTypes.INTEGER
        },
        idTipoCurso: {
            type: DataTypes.INTEGER
        },
        adminId: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        tablename: "curso",
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
