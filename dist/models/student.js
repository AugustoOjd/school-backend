"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
