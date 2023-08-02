const {Model, DataTypes, UUID} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id:{
            type:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        content:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
        },
        user_id:{
            type:DataTypes.UUID,
            references:{model:'user', key:'id'}
        },
        post_id:{
            type:DataTypes.UUID,
            references:{model:'post', key:'id'}
        }
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName:true,
        underscored:true,
        modelName:'comment'
    }
);

module.exports = Comment;