const mongoose = require('mongoose')

const DataSchema2 = new mongoose.Schema({
    nome: String,
    descricao: String,
    imagem: String,
    preco: Number,
    quantidade: Number,
    ativo: Boolean
})

const produtos = mongoose.model('Produtos', DataSchema2 )
module.exports = produtos;