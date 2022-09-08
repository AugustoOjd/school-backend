"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const sequelize_1 = require("sequelize");
const dbConnection_1 = require("../db/dbConnection");
exports.Teacher = dbConnection_1.sequelize.define('Teacher', {
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
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    role: {
        type: sequelize_1.DataTypes.STRING
    },
    matter: {
        type: sequelize_1.DataTypes.STRING
    },
});
