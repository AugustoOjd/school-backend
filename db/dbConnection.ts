import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()

const { DB_NAME,
        DB_USER,
        DB_PASSWORD,
        DB_HOST
    } = process.env
    
    
export const sequelize = new Sequelize( `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?ssl=true`, {
    logging: false,
    native: false,
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
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

