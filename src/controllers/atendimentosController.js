const Atendimentos = require("../model/Atendimentos");

const AtendimentosController = {
    async listarAtendimentos(req, res){
        try{
            const listaDeAtendimentos = await Atendimentos.findAll()
            res.status(200).json(listaDeAtendimentos)
        } catch (error) {
            res.json("Não foi possível listar os atendimentos")
            console.error(error)
        }
    },
    async listarAtendimentoById(req, res){
        const { id } = req.params;
        try {
            const atendimentoBD = await Atendimentos.findByPk(id);
            if(!atendimentoBD){
                return res.status(404).json(`Não existe atendimento com o id ${id}`);
            }
            res.status(200).json(atendimentoBD);
        } catch (error) {
            res.status(400).json('Não foi possivel encontrar o atendimento pelo ID');
        }
    },
    async cadastrarAtendimento(req, res) {
        try {
            const { paciente_id, data_atendimento, observacao, psicologo_id } = req.body;
            const novoAtendimento = await Atendimentos.create({paciente_id, data_atendimento, observacao, psicologo_id});
            return res.status(201).json(novoAtendimento);
        } catch (error) {
            console.log(error)
            res.status(400).json('Não foi possivel cadastrar o atendimento');
        }
    }
}

module.exports = AtendimentosController;