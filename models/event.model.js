const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    pontos: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Event', EventSchema);