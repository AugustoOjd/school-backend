import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()

const { DB_NAME,
        DB_USER,
        DB_PASSWORD,
        DB_HOST
    } = process.env


export const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?ssl=require`, {
    logging: false,
    native: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejecUnauhorized: false
        }
    }
})


// export const sequelize = new Sequelize( 
//     process.env.DB_NAME || 'school-server', 
//     process.env.DB_USER || 'postgres', 
//     process.env.DB_PASSWORD, 
//     {
//     host: process.env.DB_HOST,
//     dialect: 'postgres'

// })

