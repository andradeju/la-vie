const express = require("express")
const PsicologosController = require("../controllers/psicologosController")
const routes = express.Router()

routes.get("/psicologos", PsicologosController.listarPsicologos)

