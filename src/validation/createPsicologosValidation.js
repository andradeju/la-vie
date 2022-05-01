const {validate, Joi} = require ('express-validation')

module.exports = validate ({
    body: Joi.object({
        NOME: Joi.string().required(),
        EMAIL: Joi.string().email().required(),
        SENHA: Joi.string().min(6).required(),
        APRESENTACAO: Joi.string().required()
    })
})