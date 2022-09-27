import { Request, Response } from "express"
import Student  from "../models/student"
import bcrypt from 'bcryptjs';
import { IStudent } from '../interface/student';
import { generarJWT } from "../helpers/jwt";



type Data = 
| { msg: string }
| {
    token: string,
    student:{
        id:         string,
        email:      string,
        name:       string,
        lastName:   string,
        role:       string,
        state:      boolean,
        point:      number
    }
}





export const loginStudent = async ( req: Request, res: Response<Data>)=>{
    
    const { email = '', password = ''} = req.body
    
    try {

        const user = await Student.findOne({ 
            where: { 
                email: email} 
        })

        // console.log(user)

        if(!user){
            return res.status(400).json({
                msg: 'El correo electronico no existe'
            })
        }

        if( !bcrypt.compareSync( password, user.password! ) ){
            return res.status(400).json({msg: 'Correo o password no valido - PASSWORD'})
        }

        if(user.state === false){
            return res.status(400).json({
                msg: 'Este usuario ya no tiene permisos de ingreso'
            })
        }

        const token = generarJWT( user.id )


    return res.status(200).json({
        token,
        student:{
            id:         user.id,
            email:      user.email,
            name:       user.name,  
            lastName:   user.lastName,
            role:       user.role,
            state:      user.state,
            point:      user.point
        }
    })




    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}