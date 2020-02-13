const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuariosSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    senha: {type: String, required: true},
});
// Exportar o modelo
module.exports = mongoose.model('Usuarios', UsuariosSchema);