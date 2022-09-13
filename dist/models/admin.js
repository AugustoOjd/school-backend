"use strict";
// import { Sequelize, DataTypes } from 'sequelize';
// import { sequelize } from '../db/dbConnection';
Object.defineProperty(exports, "__esModule", { value: true });
// export const Admin = sequelize.define( 'Admin', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:{
//         type: DataTypes.STRING
//     },
//     lastName:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     state:{
//         type: DataTypes.BOOLEAN
//     },
//     role:{
//         type: DataTypes.STRING
//     }
// })
const sequelize_1 = require("sequelize");
const dbConnection_1 = require("../db/dbConnection");
const Admin = dbConnection_1.sequelize.define('Admin', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'admin'
    }
});
exports.default = Admin;
