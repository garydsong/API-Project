'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Songs', [
      {
        title: 'Song1',
        url:'song url here',
        userId: 1,
        albumId:3,
        description:'Sounds that inspire a dev to learn'
      },
      {
        title: 'Song2',
        url:'song url here',
        userId: 2,
        albumId: 1,
        description:'Sounds that inspire a dev to learn'
      },
      {
        title: 'Song 3',
        url:'song url here',
        userId: 3,
        albumId:2,
        description:'Sounds that inspire a dev to learn'
      },
      {
        title: 'Song4',
        url:'song url here',
        userId: 1,
        albumId: 3,
        description:'Sounds that inspire a dev to learn'
      },
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Songs', {
      title: { [Op.in]: ['Song1', 'Song2', 'Song3', 'Song4'] }
    }, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
