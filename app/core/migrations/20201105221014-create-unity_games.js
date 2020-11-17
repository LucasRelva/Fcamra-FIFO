'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('unity_games', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      unity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'unities', key: 'id'},
        onUpdate:  'CASCADE',
        onDelete: 'CASCADE',
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'games', key: 'id'},
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

    await queryInterface.dropTable('unity_games');
  }
};
