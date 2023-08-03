const {Post} = require('../models');

const postData = [
    {
        title: 'Handlbars.js Templates are the best!',
        content: 'I love working with handlebars',
        userid: 1
    },
    {
        title: 'I love Sequelize!',
        content: 'Sequelize is so easy to learn and use!',
        userid: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;