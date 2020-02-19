// app.js
const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/user.route"); // Importando rotas de usuarios
const event = require("./routes/event.route"); // Importando rotas de eventos
const app = express();
var cors = require('cors');
app.use(cors());

// Configurando o mongo
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb+srv://WictorGirardi:wictorbastos@cluster0-s3q6t.mongodb.net/test?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("erro", console.error.bind(console, "Erro de conexao MongoDB:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", user);
app.use("/event", event);

let port = 8000;

app.listen(process.env.PORT || port, () => {
  console.log("O servidor quer esta sendo executado na porta: " + port);
});
