const usuarios = require('../models/usuarios');

const listarTodosUsuarios = async (_req, res) => {
    try {
        const listaUsuarios = await usuarios.find({}, 'nome email',);
        return res.status(200).json(listaUsuarios);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

module.exports = { listarTodosUsuarios }