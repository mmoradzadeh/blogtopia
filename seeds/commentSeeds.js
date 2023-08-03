const {Comment} = require('../models');

const commentData = [
    {
        content: 'This blog post is great!',
        userid: 1,
        postid: 2
    },
    {
        content: 'Awesome post!',
        userid: 2,
        postid: 1
    },
    {
        content: 'Nice job!',
        userid: 1,
        postid: 1,
    },
    {
        content: 'This is a great post!',
        userid: 2,
        postid: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;