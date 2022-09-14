import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const generarJWT = ( uid = '' ) =>{

    const payload = { uid }

    return jwt.sign( payload, process.env.SECRET_KEY_JWT!)
}