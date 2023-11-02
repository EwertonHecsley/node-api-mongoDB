const { Router } = require('express');
const rota = Router();

const { listarTodosUsuarios } = require('./controller/listarUsuarios');
const { cadastrarUsuario } = require('./controller/cadastrarUsuario');


rota.get('/usuario', listarTodosUsuarios);
rota.post('/usuario', cadastrarUsuario);

module.exports = rota