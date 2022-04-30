const db = require("../database")
const { DataTypes} = require("sequelize")

const Pacientes = db.define(
    "Pacientes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        nome: {
            type: DataTypes.STRING,
            field: "NOME"
        },
        email: {
            type: DataTypes.STRING,
            field: "EMAIL"
        },
        idade: {
            type: DataTypes.DATE,
            field: 'IDADE'
        }
    }, {
        tableName: "pacientes",
        timestamps: false
    }
)
module.exports = Pacientes