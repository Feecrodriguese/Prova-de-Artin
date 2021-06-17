const express = require('express');
const UsuarioController = require('./controller/UsuarioController');
const ProdutosController = require('./controller/ProdutosController');

const routes = express.Router();

routes.get('/', function(req, res){
     res.json({message: "Bem vindo ao Back End Mongo DB"})
})

routes.get('/usuario', UsuarioController.index)
routes.get('/usuario/:_id', UsuarioController.detail)
routes.post('/usuario', UsuarioController.store)


routes.get('/produtos', ProdutosController.index)
routes.get('/produtos/:_id', ProdutosController.detail)
routes.post('/produtos', ProdutosController.store)
routes.delete('/produtos/:_id', ProdutosController.delete)
routes.put('/produtos', ProdutosController.update)




module.exports = routes;