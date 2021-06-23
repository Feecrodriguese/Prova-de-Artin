const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

require("./controller/LoginController")(app)

const middleware = require('./middleware/autenticar')
app.use(middleware)

require("./controller/UsuarioController")(app)