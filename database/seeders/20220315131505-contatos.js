'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contatos', [
      {id: 1, nome: "Luis", usuarios_id: 5},
      {id: 2, nome: "Rafael", usuarios_id: 5},
      {id: 3, nome: "Pablo", usuarios_id: 2},
      {id: 4, nome: "Patara", usuarios_id: 2},
      {id: 5, nome: "Lucas", usuarios_id: 4},
      {id: 6, nome: "Thiago", usuarios_id: 4}
    ], {});
       
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('contatos', null, {});
  }
};
