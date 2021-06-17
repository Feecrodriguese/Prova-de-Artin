const  Produtos = require('../model/Produtos');

module.exports = {
    async index(req, res){
        const produtos = await Produtos.find(); // select * from produtos
        res.json(produtos)
    },

    async detail(req, res){
        const {_id} = req.params
        const produtos = await Produtos.findOne({_id});  // select * from usuario where id = ?
        res.json(produtos)
    },



    async store(req, res){
        const { nome, descricao, imagem, preco, quantidade } = req.body;

        let dataCreate = {}

        dataCreate = {
            nome, descricao, imagem, preco, quantidade
        }
        const produtos = await Produtos.create(dataCreate); 
        res.json(produtos)
    },

  
    async delete(req, res){
        const {_id} = req.params
        const produtos = await Produtos.findByIdAndDelete({_id});  // select * from usuario where id = ?
        res.json(produtos)
    },


    async update(req, res){
        const { _id, nome, descricao, imagem, preco, quantidade } = req.body;

        let dataCreate = {}

        dataCreate = {
             nome, descricao, imagem, preco, quantidade
        }
        const produtos = await Produtos.findByIdAndUpdate({_id}, dataCreate, {new: true}); 
        res.json(produtos)
    }

   

}