const express = require("express")
const PsicologosController = require("../controllers/psicologosController")
const PacientesController = require("../controllers/pacientesController")
const routes = express.Router()

routes.get("/psicologos", PsicologosController.listarPsicologos)
routes.get("/psicologos/:id", PsicologosController.listarPsicologoId)
routes.post("/psicologos", PsicologosController.cadastrarPsicologo)
routes.delete("/psicologos/:id", PsicologosController.deletarPsicologo)
routes.put("/psicologos/:id", PsicologosController.atualizarPsicologo)

routes.get("/pacientes", PacientesController.listarPacientes)
routes.get("/pacientes/:id", PacientesController.listarPacienteId)
routes.post("/pacientes", PacientesController.cadastrarPaciente)
routes.delete("/pacientes/:id", PacientesController.deletarPaciente)
routes.put("/pacientes/:id", PacientesController.atualizarPaciente)

module.exports = routes
