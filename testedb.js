// Importei o sequelize e o QueryTypes
const { Sequelize, QueryTypes } = require('sequelize');

// Importar as minhas configurações
const config = require('./database/config/config.json').development;

// Criando a minha conexão com o banco de dados.
const conexao = new Sequelize(config);

// Executando uma consulta de teste... RAW QUERY
conexao.query("select * from usuarios", {type: QueryTypes.SELECT}).then(
    dados => {
        console.log(dados);
        conexao.close();
    }
)