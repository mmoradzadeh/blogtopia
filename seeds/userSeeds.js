const {User} = require('../models');

const userData = [
    {
        email: 'mehdi@test.com',
        first_name: 'Mehdi',
        last_name: 'Moradzadeh',
        username: 'MMoradzadeh',
        password: 'password1'
    },
    {
        email: 'hadi@test.com',
        first_name: 'Hadi',
        last_name: 'Moradzadeh',
        username: 'HMoradzadeh',
        password: 'password2'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;