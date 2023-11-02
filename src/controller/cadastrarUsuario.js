const usuarioBd = require('../models/usuarios');

const cadastrarUsuario = async (req, res) => {
    try {
        const novoUsuario = new usuarioBd(req.body);
        await novoUsuario.save();
        return res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro ao cadastrar o usuário', erro: error });
    }
};

module.exports = { cadastrarUsuario };
