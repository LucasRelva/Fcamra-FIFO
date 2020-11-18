'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('games', [
      {
        id: 1,
        name: 'Playstation',
        slug: 'playstation',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date(),
      },{
        id: 2,
        name: 'Bilhar',
        slug: 'bilhar',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date(),
      },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('games', null, {});
  }
};
