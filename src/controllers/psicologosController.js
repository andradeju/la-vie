const Psicologos = require("../model/Psicologos")
const bcrypt = require("bcryptjs")


const PsicologosController = {
    async listarPsicologos(req, res){
        try {
            const listaDePsicologos = await Psicologos.findAll()
            res.status(200).json(listaDePsicologos)
        } catch (error) {
            res.send("Não foi possível listar os psicologos")
            console.error(error)
        }
    },
    async listarPsicologoId(req, res){
        const { id } = req.params
        try {
            const psicologoId = await Psicologos.findByPk(id)
            if (!psicologoId){
                res.status(404).json('Não existe psicologo com o id ' +id)
            }
            res.status(200).json(psicologoId)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o psicologo pelo ID")
        }
    },
    async cadastrarPsicologo(req, res){
        try {
            const { nome, senha, email, apresentacao } = req.body
            const novaSenha = bcrypt.hashSync(senha, 10)
            const novoPsicologo = await Psicologos.create({nome, senha: novaSenha, email, apresentacao})
            return res.status(201).json(novoPsicologo)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o psicologo")
        }
    },
    async deletarPsicologo(req, res){
        const { id } = req.params
        try {
            const psicologoId = await Psicologos.destroy({
                where: {
                    id
                }
            })
            res.status(204)

            if (!psicologoId){
                res.status(404).json('Não existe psicologo com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o psicologo")
        }
    }

}

module.exports = PsicologosController