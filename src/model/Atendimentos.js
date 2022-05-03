const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos  = require("./Psicologos");
const Pacientes = require("./Pacientes");

const Atendimentos = db.define(
    "Atendimentos", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        data_atendimento: {
            type: DataTypes.DATE,
            field: "DATA_ATENDIMENTO"
        },
        observacao: {
            type: DataTypes.STRING,
            field: "OBSERVACAO"
        },
        paciente_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Pacientes,
                key: "id"
            },
            field: "PACIENTE_ID"
        },
        psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Psicologos,
                key: "id"
            },
            field: "PSICOLOGO_ID"
        }
    }, {
        tableName: "atendimentos",
        timestamps: false
    }
)
module.exports = Atendimentos;