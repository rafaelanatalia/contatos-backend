'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'emails',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
        contatos_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName:'contatos'
            },
            key:'id'
          },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return  queryInterface.dropTable('emails');
  }
};
