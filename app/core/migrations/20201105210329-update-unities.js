'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.addColumn('unities', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
        after: 'name'
      }, 
       
      );
    
  },

  down: async (queryInterface, Sequelize) => {
    
     
      await queryInterface.removeColumn('unities','slug');
    
  }
};
