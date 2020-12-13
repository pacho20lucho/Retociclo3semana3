'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
        {
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$7LK0GhTZ9273ZPl7GpUpDeHKDvVsbl5nspptvxhj8Ca.Y8D/3XvUi',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};