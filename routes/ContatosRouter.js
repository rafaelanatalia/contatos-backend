const ContatoController= require ('../Controllers/ContatoController')
const express= require('express');

const router= express.Router();



/**
 * listar contatos  | GET | /contatos
 * listar informações de um contato especifico  | get | /contatos/:id
 * buscar contato                              | GET     | /contatos/search
    cadastrar um contato                        |post | /contatos
    deletar um contato                          |Delete | /contatos/:id
    alterar um contato                          |UPDATe  | /contatos/:id
*/


router.get ('/',ContatoController.index);
router.get ('/contatos/:id',ContatoController.show);
router.get('/search', ContatoController.search);
router.post ('/contatos',ContatoController.create);
router.delete ('/contatos/:id', ContatoController.destroy);
router.put ('/contatos/:id', ContatoController.update);


module.exports=router;