const db = require("../database")
const {
    DataTypes
} = require("sequelize")
const Psicologos = db.define(
    "Psicologos", {
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
        senha: {
            type: DataTypes.STRING,
            field: "SENHA"
        },
        apresentacao: {
            type: DataTypes.STRING,
            field: "APRESENTACAO"
        }
    }, {
        tableName: "psicologos",
        timestamps: false
    }
)
module.exports = Psicologos