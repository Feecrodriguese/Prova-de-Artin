const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    usuario: String,
    senha: String,
    email: String
})

const usuario = mongoose.model('Usuario', DataSchema )
module.exports = usuario;