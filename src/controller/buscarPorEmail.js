const usuarios = require('../models/usuarios');

const buscarPorEmail = async (req, res) => {
    try {
        const buscarUsuario = await usuarios.findOne({
            email: req.params.email
        }, 'nome email')

        return res.status(200).json(buscarUsuario)
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = { buscarPorEmail }