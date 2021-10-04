const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {
    registrar: async (req, res)=>{
        // As info virão req.body
        // {"nome":"XXX", "email":"XXX@XXX", "senha":"123456"}
       
        let {nome, email, senha} = req.body;

        try {
            let novoUsuario = await Usuario.create({nome, email, senha:bcrypt.hashSync(senha, 10)});
            return res.status(201).json(novoUsuario);
        } catch (error) {
            return res.status(409).json({error: 1, msg:"Usuário já cadastrado com este email."});
        }

    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}