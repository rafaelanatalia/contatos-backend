const { Telefone, sequelize } = require('../database/models');

Telefone.create({numero:"11 9 8888 8888", contatos_id:2}).then(
    tel => {
        console.log(tel.numero);
        sequelize.close()
    }
)