const express = require("express")
const PsicologosController = require("../controllers/psicologosController")
const PacientesController = require("../controllers/pacientesController")
const AtendimentosController = require("../controllers/atendimentosController")
const createPsicologosValidation = require("../validation/psicologos/createPsicologosValidation")
const createPacientesValidation = require('../validation/pacientes/createPacientesValidation')
const createAtendimentosValidation = require("../validation/atendimentos/createAtendimentosValidation")
const authController = require('../controllers/authController')
const loginValidation = require('../validation/auth/authLogin')
const autenticador = require('../middlewares/autenticador')
const dashboard = require('../controllers/dashboardController')
const routes = express.Router()

routes.get("/psicologos", PsicologosController.listarPsicologos)
routes.get("/psicologos/:id", PsicologosController.listarPsicologoId)
routes.post("/psicologos", createPsicologosValidation, PsicologosController.cadastrarPsicologo)
routes.delete("/psicologos/:id", PsicologosController.deletarPsicologo)
routes.put("/psicologos/:id", PsicologosController.atualizarPsicologo)

routes.get("/pacientes", PacientesController.listarPacientes)
routes.get("/pacientes/:id", PacientesController.listarPacienteId)
routes.post("/pacientes", createPacientesValidation, PacientesController.cadastrarPaciente)
routes.delete("/pacientes/:id", PacientesController.deletarPaciente)
routes.put("/pacientes/:id", PacientesController.atualizarPaciente)

routes.post('/login', loginValidation, authController.login)

routes.get('/atendimentos', AtendimentosController.listarAtendimentos)
routes.get('/atendimentos/:id', AtendimentosController.listarAtendimentoById)
routes.post('/atendimentos', autenticador, createAtendimentosValidation, AtendimentosController.cadastrarAtendimento)

routes.get('/dashboard/pacientes', dashboard.numerosPacientes)
routes.get('/dashboard/atendimentos', dashboard.numerosAtendimentos)
routes.get('/dashboard/psicologos', dashboard.numerosPsicologos)
routes.get('/dashboard/psicologos/media', dashboard.atendimentoPsicologo)

module.exports = routes
