const usuario = require('../models/usuarios');

async function deletarUsuario(req, res) {
    const { id } = req.params;
    try {
        await usuario.findByIdAndDelete(id);
        return res.status(200).json({ mensagem: 'Usuário deletado.' })
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    deletarUsuario
}