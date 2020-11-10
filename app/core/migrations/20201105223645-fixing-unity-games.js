'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.removeColumn('unity_games','is_active');
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.addColumn('unity_games', 'is_active');
     
  }
};
