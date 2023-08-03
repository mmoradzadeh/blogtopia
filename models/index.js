const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

Post.belongsTo(User,{foreignKey:'userid', onDelete:'CASCADE'});

Post.hasMany(Comment,{foreignKey:'postid', onDelete:'CASCADE'});

Comment.belongsTo(User ,{foreignKey:'userid', onDelete:'CASCADE'});


module.exports = {
    Post,
    User,
    Comment
};