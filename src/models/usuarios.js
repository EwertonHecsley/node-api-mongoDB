'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true
    }
});

module.exports = model('Usuarios', schema)