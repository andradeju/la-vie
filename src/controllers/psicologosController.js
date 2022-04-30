const Psicologos = require("../model/Psicologos")
const PsicologosController = {
    async listarPsicologos(req, res){
        try {
            const listaDePsicologos = await Psicologos.findAll()
            res.status(200).json(listaDePsicologos)
        } catch (error) {
            res.send("Não foi possível listar os psicologos")
            console.error(error)
        }
    }
}

module.exports = PsicologosController