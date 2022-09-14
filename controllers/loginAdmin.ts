import { Request, Response } from 'express'
import bcrypt from 'bcryptjs';
import Admin from '../models/admin';
import { generarJWT } from '../helpers/jwt';



type Data = 
| { msg: string }
| {
    token: string,
    admin:{
        email:      string,
        name:       string,
        lastName:   string,
        role:       string,
        state:      boolean
    }
}

export const loginAdmin = async (req: Request, res: Response<Data>) =>{

    const { email = '', password = '' } = req.body

    try {
        
        const user = await Admin.findOne({
            where: {
                email
            }
        })

        if(!user){
            return res.status(400).json({
                msg: 'El correo ingresado es incorrecto'
            })
        }

        if( !bcrypt.compareSync( password, user.password! ) ){
            return res.status(400).json({
                msg: 'Correo o password no valido - PASSWORD'
            })
        }

        if(user.state === false){
            return res.status(400).json({
                msg: 'Este usuario ya no tiene permisos de ingreso'
            })
        }



        const token = generarJWT(user.id)


        return res.status(200).json({
            token,
            admin:{
                email:      user.email,  
                name:       user.name,  
                lastName:   user.lastName,
                role:       user.role,
                state:      user.state
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'Error a logear administrador'
        })
    }

}