import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()



export const sequelize = new Sequelize( 
    process.env.DB_NAME || 'school-server', 
    process.env.DB_USER || 'postgres', 
    process.env.DB_PASSWORD, 
    {
    host: process.env.DB_HOST,
    dialect: 'postgres'

})

