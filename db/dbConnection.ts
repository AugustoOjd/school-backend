import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize( 
    'school-data', 
    'postgres', 
    'randommove', 
    {
    host: 'localhost',
    dialect: 'postgres'

})

