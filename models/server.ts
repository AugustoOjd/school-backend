import express, { Application, json } from 'express'
import adminRouter from '../routes/admin'
import loginRouter from '../routes/login'
import registerRouter from '../routes/register'
import cors  from 'cors'
import { sequelize } from '../db/dbConnection';


// Crearon de tablas
// import { Admin } from './admin';
// import { Student } from './student';

class Server {

    private app: Application;
    private port: string;
    private paths = { 
        student:    '/api/admin',
        login:      '/api/login',
        register:   '/api/register'
    }

    constructor(){
        this.app    = express()
        this.port   = process.env.PORT || '8000'

        // Base de datos
        this.dbConnection()

        // Middlewares
        this.middlewares();

        // Definir rutas
        this.routes();
    }


    async dbConnection(){
        try {
            await sequelize.authenticate();
            // await Admin.sync()
            // await Student.sync()
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    middlewares(){

        // CORS
        
        this.app.use( cors())
        // Lectura del body

        this.app.use( express.json() )
        // Carpeta Publica

        this.app.use( express.static( 'public' ) )
    }


    routes(){
        this.app.use( this.paths.student, adminRouter ),
        this.app.use( this.paths.login, loginRouter),
        this.app.use( this.paths.register, registerRouter)
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

    

}


export default Server