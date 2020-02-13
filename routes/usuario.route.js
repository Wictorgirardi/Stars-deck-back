const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const usuarios_controller = require('../controllers/usuarios.controller');
// teste simples
router.get('/testar', usuarios_controller.test);
router.post('/create', usuarios_controller.create);
module.exports = router;