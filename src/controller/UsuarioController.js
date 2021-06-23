const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res){
        const usuarios = await Usuario.find(); // select * from usuario
        res.json(usuarios)
    },

    async detail(req, res){
        const {_id} = req.params
        const usuarios = await Usuario.findOne({_id});  // select * from usuario where id = ?
        res.json(usuarios)
    },


    async store(req, res){
        const { nome, usuario, senha, email } = req.body;

        let dataCreate = {}

        dataCreate = {
            nome, usuario, senha, email
        }
        const usuarios = await Usuario.create(dataCreate);  //insert into usuario (nome, usuario, senha, email) Values ...
        res.json(usuarios)
    }
}