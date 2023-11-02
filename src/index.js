require('dotenv').config()
const mongoose = require('mongoose');

const express = require('express');
const rota = require('./rotas');
const app = express();

mongoose.connect(process.env.URL_BD)

app.use(express.json());

app.use('/', rota)

module.exports = app;