import {Request, Response, NextFunction} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import Admin from '../models/admin'


export const isSuperAdminRole = async (req: Request, res: Response, next: NextFunction)=>{

    const { id } = req.params

    if(!id){
        return res.status(401).json({msg: 'EL es id invalido'})
    }

    try {
        
        const admin = await Admin.findByPk(id)

        if(!admin){
            return res.status(401).json({ msg: 'Usuario no existe en db'})
        }

        if(admin.role !== 'SuperAdmin'){
            return res.status(401).json({ msg: 'Este usuario no es super admin'})
        }

    } catch (error) {
        console.log(error)
        return res.status(401).json({msg: 'bad request en validacion Role'})
    }


    next()

}