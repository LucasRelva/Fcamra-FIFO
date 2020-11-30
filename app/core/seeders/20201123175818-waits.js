"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "waits",
      [
        {
          id: 1,
          game_id: 1,
          user_id: 1,
          unity_id: 2,
          status: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          game_id: 2,
          user_id: 1,
          unity_id: 2,
          status: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {
      truncate: "true",
      restartIdentity: "true",
    });
  },
};
