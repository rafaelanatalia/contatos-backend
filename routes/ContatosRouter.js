const express = require('express');
const router = express.Router();
const ContatosController = require('../controllers/ContatosController');

router.get('/contatos', ContatosController.index);

module.exports = router;