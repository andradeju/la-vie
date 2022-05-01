const psicologos = require('../model/Psicologos')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const secret = require ('../config/secret')

const authController = {
    async login (req, res) {
        const { email, senha } = req.body

        const psicologo = await psicologos.findOne ({
            where: {
                email: email
            }
        })

        if (!psicologo) {
            return res.status(400).json ('Usuário não Cadastrado')
        }

        if (!bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json ('Senha Inválida')
        }

        const token = jwt.sign ({
            id: psicologo.id,
            email: psicologo.email,
            nome: psicologo.nome
        }, secret.key)

        return res.json(token)
    }
}

module.exports = authController