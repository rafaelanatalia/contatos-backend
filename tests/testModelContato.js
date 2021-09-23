const { Contato, sequelize } = require('../database/models');


Contato.findByPk(2,{include:['telefones','usuario']}).then(
    c => {
        console.log(c.toJSON());
        sequelize.close();
    }
);

/*
async function teste(){
    let resultado = await Contato.create({nome:"Raul", email:"raul@cortes.com",usuarios_id:1});
    let contatos = await Contato.findAll();
    console.log(contatos.map(c=>c.toJSON()));
    sequelize.close();
}

teste();
*/