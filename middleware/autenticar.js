const moongose = require('../server')

const Usuarios = moongose.Schema({
    usuario: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    chave: {
        type:String
    }
})

const Usuario = moongose.model('usuario', Usuarios)

module.exports = Usuario