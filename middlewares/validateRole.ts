import {Request, Response, NextFunction} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import Admin from '../models/admin'


export const isAdminRole = async (req: Request, res: Response, next: NextFunction)=>{

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

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: 'bad request en validacion Role'})
    }

    // const { role, name} = req.body

    // if(role !== 'admin'){
    //     return res.status(401).json({ msg: `${name} no tiene los permisos de administrador`})
    // }


    next()

}


