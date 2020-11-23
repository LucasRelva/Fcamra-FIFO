'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        email: 'lucas-1880@outlook.com',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },{
        id: 2,
        email: 'Allejandro@outlook.com',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: 'true', restartIdentity: 'true' });
  }
};
