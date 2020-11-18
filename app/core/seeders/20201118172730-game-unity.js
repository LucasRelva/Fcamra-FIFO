'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('unity_games', [
    {
      is_active: true,
      unity_id: 2,
      game_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('unity_games', null, {});
  }
};
