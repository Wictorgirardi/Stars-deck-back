const express = require('express');
const bodyParser = require('body-parser');
const usuarios = require('./routes/usuario.route'); // Importa rota
const app = express();
// Configurar acesso à BD.
const mongoose = require('mongoose');

let url = "mongodb+srv://WictorGirardi:wictorbastos@cluster0-s3q6t.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/usuarios', usuarios);

let porto = 8000;
app.listen(porto, () => {
    console.log('Servidor em execução no porto' + porto);
});