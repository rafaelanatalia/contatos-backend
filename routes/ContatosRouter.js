const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');
const validaHeader = require('../middlewares/validaHeader');

router.get('/contatos', validaHeader, ContatosController.index);

module.exports = router;