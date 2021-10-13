const { Contato } = require('../database/models');
module.exports = {
    index: async (req,res) => {
        let contatos = await Contato.findAll({where:{usuarios_id:req.usuario.id}})
        res.send(contatos);
    }
}