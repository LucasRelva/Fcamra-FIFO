'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('unities', [
      {
        id: 1,
        name: 'São Paulo',
        slug: 'sao-paulo',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date(),
      },{
        id: 2,
        name: 'Santos',
        slug: 'sao-paulo',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('unities', null, {});
  }
};
