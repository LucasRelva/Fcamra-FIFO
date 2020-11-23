'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('waits', 'unity_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'unities', key: 'id'},
      onUpdate:  'CASCADE',
      onDelete: 'CASCADE',
      after: 'user_id'
    });
  
},

down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('waits','unity_id');
  
}
};
