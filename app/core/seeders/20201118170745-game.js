'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('games', [
      {
        id: 1,
        name: 'Playstation FIFO',
        slug: 'playstation-fifo',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },{
        id: 2,
        name: 'Playstation Zelda',
        slug: 'playstation-zelda',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Sinuca',
        slug: 'sinuca',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Uno',
        slug: 'uno',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Ping-Pong',
        slug: 'ping-pong',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: 'Zombicide',
        slug: 'zombicide',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        name: 'Detetive',
        slug: 'detetive',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        name: 'Card Game',
        slug: 'card-game',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        name: 'Board Game',
        slug: 'board-game',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('games', null, { truncate: 'true', restartIdentity: 'true' });
  }
};
