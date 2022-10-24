"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
exports.sequelize = new sequelize_1.Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME} `, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejecUnauhorized: false
        }
    }
});
// export const sequelize = new Sequelize( 
//     process.env.DB_NAME || 'school-server', 
//     process.env.DB_USER || 'postgres', 
//     process.env.DB_PASSWORD, 
//     {
//     host: process.env.DB_HOST,
//     dialect: 'postgres'
// })
