'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert(
       'usuarios',
       [
        {id: 1},
        {id: 2},
        {id: 3}
      ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
