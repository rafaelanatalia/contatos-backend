/**
 * Lista de Método do Controller
 * 
 * 1 - index: Listar muitos (get '/contatos')
 * 2 - show: Levantar um contato (get '/contatos/:id');
 * 3 - create: Salvar um novo contato (post '/contatos')
 * 4 - destroy: Remove um contato (delete '/contatos/:id')
 * 5 - update: Altera um contato (put '/contatos/:id')
 */

 const {sequelize} = require('../database/models');

 const uid = 7;
 
 module.exports = {
     index: async (req,res) => {
         let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${uid}`;
         let contatos = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
         res.status(200).json(contatos);
     },
     show: async (req,res) => {
         let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${uid} AND id=${req.params.id}`;
         let resultado = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
         if(resultado.length == 0){
             res.status(404).json({msg: "Contato inexistente"});
         } else {
             res.status(200).json(resultado[0]);
         }
     },
     search: async (req,res) => {
         let trechoBuscado = req.query.q;
         let sql = `SELECT id, nome FROM contatos WHERE usuarios_id=${uid} AND nome LIKE '%${trechoBuscado}%'`;
         let resultado = await sequelize.query(sql, {type:sequelize.QueryTypes.SELECT});
         res.status(200).json(resultado)
     },
     create: async (req,res) => {
 
         // Capturando as info do body
         let {nome, emails, telefones} = req.body;
 
         // Salvar o nome contato
         let sql = `INSERT INTO contatos (nome,usuarios_id) VALUES ("${nome}", "${uid}")`;
         let resultado = await sequelize.query(sql,{type: sequelize.QueryTypes.INSERT});
 
         // Levantar o ID do contato recém criado
         let [idCriado, nLinhas] = resultado;
 
         // Salvar os emails
         emails = emails.map((e) => {return {email:e, contatos_id:idCriado}});
         sequelize.queryInterface.bulkInsert('emails', emails);
         
         // Salvar os telefones
         telefones = telefones.map((t) => {return {telefone:t, contatos_id:idCriado}});
         sequelize.queryInterface.bulkInsert('telefones', telefones);
 
         // Enviar uma resposta para o cliente 
         res.json({msg:"Ok", idCriado});
 
     },
     destroy: (req,res) => {res.send('função destroy')},
     update: (req,res) => {res.send('função update')}
 }