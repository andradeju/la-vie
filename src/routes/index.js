const express = require("express")
const PsicologosController = require("../controllers/psicologosController")
const routes = express.Router()

routes.get("/psicologos", PsicologosController.listarPsicologos)
routes.get("/psicologos/:id", PsicologosController.listarPsicologoId)
routes.post("/psicologos", PsicologosController.cadastrarPsicologo)
routes.delete("/psicologos/:id", PsicologosController.deletarPsicologo)

module.exports = routes
