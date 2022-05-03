const {validate, Joi} = require ('express-validation');

module.exports = validate ({
    body: Joi.object({
        paciente_id: Joi.number().required(),
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
        psicologo_id: Joi.number().required(),
    })
})