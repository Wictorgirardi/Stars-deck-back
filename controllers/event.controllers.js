const Product = require("../models/event.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Teste do controller");
};

exports.product_create = function(req, res) {
  let product = new Product({
    nome: req.body.nome,
    pontos: req.body.pontos
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Evento criado com sucesso");
  });
};

exports.product_details = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

exports.product_update = function(req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Evento atualizado");
  });
};
