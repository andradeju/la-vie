const { Psicologos } = require("../model")
const bcrypt = require("bcryptjs")


const PsicologosController = {
    async listarPsicologos(req, res){
        try {
            const listaDePsicologos = await Psicologos.findAll()
            res.status(200).json(listaDePsicologos)
        } catch (error) {
            res.json("Não foi possível listar os psicologos")
            console.error(error)
        }
    },
    async listarPsicologoId(req, res){
        const { id } = req.params
        try {
            const psicologoId = await Psicologos.findByPk(id)
            if (!psicologoId){
                return res.status(404).json('Não existe psicologo com o id ' +id)
            }
            res.status(200).json(psicologoId)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o psicologo pelo ID")
        }
    },
    async cadastrarPsicologo(req, res){
        try {
            const {nome, senha, email, apresentacao} = req.body
            const novaSenha = bcrypt.hashSync(senha, 10)
            const novoPsicologo = await Psicologos.create({nome, senha: novaSenha, email, apresentacao})
            return res.status(201).json(novoPsicologo)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o psicologo")
            console.log(error)
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
            res.status(204).send('')

            if (!psicologoId){
                return res.status(404).json('Não existe psicologo com o id ' +id)
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o psicologo")
        }
    },

    async atualizarPsicologo (req, res) {
        const { id } = req.params
        try {
            const { nome, senha, email, apresentacao } = req.body
            
            if (senha){
                const novaSenha = bcrypt.hashSync(senha, 10)
                const atualizarPsicologo = await Psicologos.update(
                    {nome, senha: novaSenha, email, apresentacao}, 
                    {
                    where: {
                        id
                    }
                })
                return res.status(201).json('Psicologo atualizado')
            }else {
                const atualizarPsicologo = await Psicologos.update(
                    {nome, senha, email, apresentacao}, 
                    {
                    where: {
                        id
                    }
                })
                return res.status(201).json('Psicologo atualizado com sucesso')
            }

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o paciente")
        }
    }

}

module.exports = PsicologosController