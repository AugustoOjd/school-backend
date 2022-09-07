import express, { Application, json } from 'express'
// import userRoutes from '../routes/usuario'
import cors  from 'cors'
// import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private paths = {  }

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
        // try {
        //     await db.authenticate();
        //     console.log('Database online')
        // } catch (error: any) {
        //     throw new Error( error)
        // }
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
        // this.app.use( this.paths.usuarios, userRoutes )
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }

    

}


export default Server