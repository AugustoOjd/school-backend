import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/dbConnection';


export const Student = sequelize.define('Student', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    role:{
        type: DataTypes.STRING,
        defaultValue: 'student'
    },
    country:{
        type: DataTypes.STRING
    },
    point:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
})

