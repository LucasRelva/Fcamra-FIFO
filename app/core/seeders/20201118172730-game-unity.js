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
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 4,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 5,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 6,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 7,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 8,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      is_active: true,
      unity_id: 2,
      game_id: 9,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('unity_games', null, { truncate: 'true', restartIdentity: 'true' });
  }
};
