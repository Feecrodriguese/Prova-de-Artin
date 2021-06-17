const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes')

const app = express()

mongoose.connect('mongodb+srv://aluno:aluno@cluster0.ieewl.mongodb.net/ArquiteturaArtin', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Mongo Db conectado com Sucesso")
    }
})


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)

app.listen(3003, function () {
    console.log("Servidor Iniciou com Sucesso")
})