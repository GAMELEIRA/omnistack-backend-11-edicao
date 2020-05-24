//IMPORTANDO AS FUNCIONALIDADES DO EXPRESS. ESTE FRAMEWORK E UTILIZADO PARA TRABALHAR COM ROTAS DA APLICACAO
const express = require('express');

const routes = require("./routes.js");

//IMPORTA PARA A APLICACAO AS CONFIGURACOES DA APLICACAO
const app = express();

//PERMITE O RETORNO NO FORMATO JSON
app.use(express.json());

app.use(routes);

//LIBERAR A PORTA DA APLICACAO 
app.listen(3333);