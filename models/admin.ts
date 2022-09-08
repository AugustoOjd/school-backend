import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db/dbConnection';


export const Admin = sequelize.define( 'Admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    state:{
        type: DataTypes.BOOLEAN
    },
    role:{
        type: DataTypes.STRING
    }
})

