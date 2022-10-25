import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import Student from "../models/student"
import type { JwtPayload } from "jsonwebtoken"
import Admin from "../models/admin"





export const validarJWT = async (req: Request, res: Response, next: NextFunction) =>{

    const { token = '' } = req.cookies
    // console.log(token)

    // const token = req.header('x-token')

    if(!token){
        return res.status(401).json({msg: 'no existen el token'})
    }

    try {


        const {uid} = jwt.verify( token, process.env.SECRET_KEY_JWT!) as JwtPayload

        
        const user = await Student.findByPk(uid)

        if(!user){
            return res.status(401).json({ msg: 'Usuario no existe en db'})
        }

        if(!user.state){
            return res.status(401).json({ msg: 'Token no autorizado'})
        }


        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: 'Token no valido'})
    }
}

export const validarJWTAdmin = async (req: Request, res: Response, next: NextFunction) =>{

    const { token = '' } = req.cookies

    if(!token){
        return res.status(401).json({msg: 'no existen el token'})
    }

    try {


        const {uid} = jwt.verify( token, process.env.SECRET_KEY_JWT!) as JwtPayload

        
        const user = await Admin.findByPk(uid)
        
        if(!user){
            return res.status(401).json({ msg: 'Usuario no existe en db'})
        }
        
        if(user.role !== 'admin'){
            return res.status(401).json({ msg: 'Este usuario no es administrador'})
        }

        if(!user.state){
            return res.status(401).json({ msg: 'Token no autorizado'})
        }


        next()

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: 'Token no valido'})
    }
}

