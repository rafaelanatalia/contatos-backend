const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {
    registrar: async (req, res)=>{
        // As info virão req.body
        // {"nome":"XXX", "email":"XXX@XXX", "senha":"123456"}
       
        let {nome, email, senha} = req.body;
        let novoUsuario = await Usuario.create({nome, email, senha:bcrypt.hashSync(senha, 10)});
        delete novoUsuario.senha;

        return res.json(novoUsuario);
    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}