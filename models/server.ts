import express, { Application, json, urlencoded } from 'express'
import path from 'path'
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
import adminRouter from '../routes/dashboardAdmin'
import loginRouter from '../routes/login'
import registerRouter from '../routes/register'
import loginAdminRouter from '../routes/loginAdmin'
import studentRouter from '../routes/dashboardStudent'
// import seedRouter from '../routes/seed-data-admin'
import cors  from 'cors'
import { sequelize } from '../db/dbConnection';
import cookieParser from 'cookie-parser'
import helmet from 'helmet'


// Crearon de tablas
import Admin from './admin';
import Student from './student';

class Server {

    private app: Application;
    private port: string;
    private paths = { 

        // paths administradores
        dashboard:          '/api/admin/dashboard',
        loginAdmin:         '/api/admin',
        // seedData:        '/api/seed-data',

        // paths estudiantes
        dashboardStudent:   '/api/student/dashboard',
        login:              '/api/login',
        register:           '/api/register',

    }

    constructor(){
        this.app    = express()
        this.port   = process.env.PORT || '5432'

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
            await Admin.sync()
            await Student.sync()
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }



    middlewares(){


        this.app.use( cookieParser() )

        this.app.use(helmet())

        // CORS
        this.app.use( cors())
        // this.app.use( cors(
        //     {
        //         origin: 'https://u-culture-augustoojd.vercel.app/',
        //         methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
        //         credentials: true,
        //       }
        // ))
        
        // Lectura del body

        this.app.use( express.json() )
        // Carpeta Publica

        this.app.use( express.static('public') )

        
        this.app.use( '/api', 
            createProxyMiddleware({ 
                target: '/student/dashboard/', 
                changeOrigin: true })
        )
    }


    routes(){
        this.app.use( this.paths.dashboard, adminRouter ),
        this.app.use( this.paths.login,     loginRouter),
        this.app.use( this.paths.register,  registerRouter),
        this.app.use( this.paths.loginAdmin, loginAdminRouter),
        this.app.use( this.paths.dashboardStudent, studentRouter)
        // this.app.use( this.paths.seedData, seedRouter )
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

    

}


export default Server