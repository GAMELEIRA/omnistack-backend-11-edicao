const connection = require('../database/connection.js');

const crypto = require('crypto');

module.exports = {

    async index(requisicao, resposta) {

        const ongs = await connection('ongs').select('*');

        return resposta.json(ongs);

    },

    async create(requisicao, resposta) {

        const { nome, email, whats, cidade, uf } = requisicao.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            nome,
            email,
            whats,
            cidade,
            uf
        });

        return resposta.json({ id });

    }
}