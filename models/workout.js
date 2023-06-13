const { Model, DataTypes, } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model { }

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        workout_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        workout_query: {
            type: DataTypes.STRING,
        },
        duration_min: {
            type: DataTypes.INTEGER,
        }
        ,
        nf_calories: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        met: {

        }
        ,
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workout',
    }

);

module.exports = Workout;


