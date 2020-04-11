//IMPORTANDO AS FUNCIONALIDADES DO EXPRESS. ESTE FRAMEWORK E UTILIZADO PARA TRABALHAR COM ROTAS DA APLICACAO
const express = require('express');

//IMPORTA PARA A APLICACAO AS CONFIGURACOES DA APLICACAO
const app = express();

//ROTA GET 
app.get('/', (requisicao, resposta) => {

    return resposta.json({
        evento:"Semana OminiStack 11.0",
        nome:"Gabriel Gameleira dos Santos"
    });

})

//LIBERAR A PORTA DA APLICACAO 
app.listen(3333);