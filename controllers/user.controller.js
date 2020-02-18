const User = require("../models/user.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Teste do controller");
};

exports.user_create = function(req, res) {
  let product = new User({
    nome: req.body.nome,
    senha: req.body.senha,
    pontos: req.body.pontos
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Evento criado com sucesso");
  });
};

exports.user_details = function(req, res) {
  User.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.user_update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Evento atualizado");
  });
};
