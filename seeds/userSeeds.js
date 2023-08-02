const {User} = require('../models');

const userData = [
    {
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        username: 'testuser1',
        password: 'password1'
    },
    {
        email: 'test2@test.com',
        first_name: 'Test2',
        last_name: 'User2',
        username: 'testuser2',
        password: 'password2'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;