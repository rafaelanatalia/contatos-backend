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
    login: async (req, res) => {
        
        // As info virão no req.body
        // {"email":"___@_____", "senha":"XXXXXXX"}

        // Capturar as info do body
        const {email, senha} = req.body;

        // Pesquisar no BD um usuário com o email dado
        const usuario = await Usuario.findOne({where:{email}});

        // Se não existir usuário, retornar erro.
        if(!usuario){
            return res.status(403).json({erro:1, msg:"Acesso negado"});
        }

        // Existindo o usuário, validar a senha dele (bcrypt)
        if(!bcrypt.compareSync(senha, usuario.senha)){
            // Se a senha for inválida, retornar erro.
            return res.status(403).json({erro:1, msg:"Acesso negado"});
        }

        // Se a senha for ok, retornar msg sucesso (por enquanto...)
        res.status(200).json({msg:"We're the champions, my frieends!!!"});
    }
}