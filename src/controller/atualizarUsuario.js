const usuario = require('../models/usuarios');

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    const { id } = req.params;
    try {
        await usuario.findByIdAndUpdate(id, {
            $set: {
                nome,
                email,
                senha
            }
        })
        return res.status(200).json({ mensagem: 'Usuário atualizado.' })
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
}

module.exports = {
    atualizarUsuario
}