const express = require('express')
const PORT = 3000
const cors = require ('cors')
const routes = require ('./src/routes')
const db = require('./src/database')

const app = express()
app.use (cors())

db.conectarBanco()

app.use(express.json())
app.use(routes);


app.listen(PORT, () => console.log('Server running on port '+ PORT))