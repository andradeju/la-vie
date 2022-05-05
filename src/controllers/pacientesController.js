const { Pacientes } = require("../model")


const PacientesController = {
    async listarPacientes(req, res){
        try {
            const listaDePacientes = await Pacientes.findAll()
            res.status(200).json(listaDePacientes)

        } catch (error) {
            res.json("Não foi possível listar dos pacientes")
            console.error(error)
        }
    },
    async listarPacienteId(req, res){
        const { id } = req.params
        try {
            const pacienteID = await Pacientes.findByPk(id)
            if (!pacienteID){
                return res.status(404).json('Não existe paciente com o id ' +id)
            }
            res.status(200).json(pacienteID)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o paciente pelo ID")
        }
    },
    async cadastrarPaciente(req, res){
        try {
            const { nome, email, idade } = req.body
            const novoPaciente = await Pacientes.create({nome, email, idade})
            return res.status(201).json(novoPaciente)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o paciente")
        }
    },
    async deletarPaciente(req, res){
        const { id } = req.params
        try {
            const pacienteId = await Pacientes.destroy({
                where: {
                    id
                }
            })
            res.status(204).json("")

            if (!pacienteId){
                return res.status(404).json('Não existe paciente com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o paciente")
        }
    },

    async atualizarPaciente (req, res) {
        const { id } = req.params
        try {
            const { nome, email, idade} = req.body
            const atualizarPaciente = await Pacientes.update(
                {nome, email, idade}, 
                {
                where: {
                    id
                }
            })
            return res.status(200).json("Paciente atualizado com sucesso")

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o paciente")
        }
    }

}

module.exports = PacientesController