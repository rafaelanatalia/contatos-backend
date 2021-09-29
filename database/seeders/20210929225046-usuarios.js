'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return await queryInterface.bulkInsert('usuarios',[
      {
        id:1,
        email:'ssiqueira@digitalhouse.com',
        senha: bcrypt.hashSync('123456', 10),
        nome:'Sérgio Moura'
      },{
        id:2,
        email:'iago@digitalhouse.com',
        senha: bcrypt.hashSync('123456', 10),
        nome:'Iago Nunes'
      },
    ])

  },

  down: async (queryInterface, Sequelize) => {
    
     return await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
