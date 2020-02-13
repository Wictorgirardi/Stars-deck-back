var Usuarios = require('../model/usuario.models');

exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

//Adicionar usuarios à BD
exports.create = function (req, res) {
    let usuario = new Usuarios(
     {
     nome: req.body.nome,
     senha: req.body.senha
     }
     );
     usuario.save(function (err) {
    if (err) {
    return next(err);
     }
     res.send('Usuario cadastrado com sucesso')
     })
    };