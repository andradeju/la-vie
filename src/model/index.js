const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos');
 
Pacientes.belongsTo(Atendimentos, {
    foreingKey: "paciente_id",
})

Psicologos.belongsTo(Atendimentos, {
    foreingKey: "psicologo_id",
})

// Pacientes.belongsToMany(Psicologos, {
//     foreingKey: "paciente_id",
//     through: Atendimentos,
// })
 
// Psicologos.belongsToMany(Pacientes, {
//     foreingKey: "psicologo_id",
//     through: Atendimentos,
// })
 
module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
}
