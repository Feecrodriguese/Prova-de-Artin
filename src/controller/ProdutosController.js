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
        const produtos = await Produtos.create(dataCreate);  // insert into produtos (nome, drescricao, imagem, preco, quantidade) Values...
        res.json(produtos)
    },

  
    async delete(req, res){
        const {_id} = req.params
        const produtos = await Produtos.findByIdAndDelete({_id});  // delete * from produtos where id = ?
        res.json(produtos)
    },


    async update(req, res){
        const { _id, nome, descricao, imagem, preco, quantidade } = req.body;

        let dataUpdate = {}

        dataUpdate = {
             nome, descricao, imagem, preco, quantidade
        }
        const produtos = await Produtos.findByIdAndUpdate({_id}, dataUpdate, {new: true});  //  update  * from produtos WHERE id = ? 
        res.json(produtos)
    }

   

}