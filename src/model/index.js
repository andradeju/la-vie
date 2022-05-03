const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');
 
Atendimentos.belongsTo(Pacientes, {
    foreignKey: "paciente_id"
})


Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologo_id"
})

 
module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
}
