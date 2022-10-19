"use strict";
// import { Sequelize, DataTypes } from 'sequelize';
// import { sequelize } from '../db/dbConnection';
Object.defineProperty(exports, "__esModule", { value: true });
// const Student = sequelize.define('Student', {
//     id:{
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//         primaryKey: true
//     },
//     name:{
//         type: DataTypes.STRING
//     },
//     lastName:{
//         type: DataTypes.STRING
//     },
//     email:{
//         type: DataTypes.STRING
//     },
//     password:{
//         type: DataTypes.STRING
//     },
//     state:{
//         type: DataTypes.BOOLEAN,
//         defaultValue: true
//     },
//     role:{
//         type: DataTypes.STRING,
//         defaultValue: 'student'
//     },
//     country:{
//         type: DataTypes.STRING
//     },
//     point:{
//         type: DataTypes.INTEGER,
//         defaultValue: 0
//     },
// })
// export default Student
const sequelize_1 = require("sequelize");
const dbConnection_1 = require("../db/dbConnection");
const Student = dbConnection_1.sequelize.define('Student', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
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
        defaultValue: 'student'
    },
    country: {
        type: sequelize_1.DataTypes.STRING
    },
    point: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    },
    nivel: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0
    }
});
exports.default = Student;
