const { Pacientes, Psicologos, Atendimentos } = require('../model') 

const dashboardControoler = {
    async numerosPacientes(req, res){
        try {
            const nPacientes = await Pacientes.count()
            res.status(200).json(`Existem ${nPacientes} pacientes cadastrados na base de dados`)

        } catch (error) {
            res.json("Não Foi Possível determinar a quantidade de pacientes cadastrados")
            console.error(error)
        }
    },

    async numerosAtendimentos(req, res){
        try {
            const nAtendimentos = await Atendimentos.count()
            res.status(200).json(`Existem ${nAtendimentos} atendimentos agendados`)

        } catch (error) {
            res.json("Não Foi Possível encontrar os atendimentos cadastrados")
            console.error(error)
        }

    },

    async numerosPsicologos(req, res){
        try {
            const nPsicologos = await Psicologos.count()
            res.status(200).json(`Existem ${nPsicologos} psicólogos cadastrados na base de dados`)

        } catch (error) {
            res.json("Não Foi Possível determinar a quantidade de psicologos cadastrados")
            console.error(error)
        }

    },

    async atendimentoPsicologo (req, res){
        
        try {
            const nAtendimentos = await Atendimentos.count()
            const nPsicologos = await Psicologos.count()
            const media = nAtendimentos/nPsicologos

            res.status(200).json(`Em média, cada psicólogo realizou ${media} atendimentos`)

        } catch (error) {
            res.json("Não Foi Possível determinar a  média dos atendimentos por psicólogos")
            console.error(error)
        }
    }

}

module.exports = dashboardControoler