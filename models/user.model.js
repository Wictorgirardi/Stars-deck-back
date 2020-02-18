const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    senha: {type: String, required: true, max: 100},
    pontos: {type: Number, required: true},
});


// Exportando a model
module.exports = mongoose.model('User', UserSchema);