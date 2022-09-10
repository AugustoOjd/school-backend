import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()



export const sequelize = new Sequelize( 
    'school-data', 
    'postgres', 
    process.env.DB_PASSWORD, 
    {
    host: 'localhost',
    dialect: 'postgres'

})

