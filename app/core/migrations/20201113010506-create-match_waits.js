'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.createTable('match_waits', { 

        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        wait_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'waits', key: 'id'},
          onUpdate:  'CASCADE',
          onDelete: 'CASCADE',
        },
        match_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'matches', key: 'id'},
          onUpdate:  'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },

       });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('match_waits');
     
  }
};
