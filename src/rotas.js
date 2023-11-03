const { Router } = require('express');
const rota = Router();

const { listarTodosUsuarios } = require('./controller/listarUsuarios');
const { cadastrarUsuario } = require('./controller/cadastrarUsuario');
const { buscarPorEmail } = require('./controller/buscarPorEmail');
const { atualizarUsuario } = require('./controller/atualizarUsuario');
const { deletarUsuario } = require('./controller/deletarUsuario');

rota.get('/usuario/:email', buscarPorEmail)
rota.get('/usuario', listarTodosUsuarios);
rota.post('/usuario', cadastrarUsuario);
rota.put('/usuario/:id', atualizarUsuario);
rota.delete('/usuario/:id', deletarUsuario);

module.exports = rota