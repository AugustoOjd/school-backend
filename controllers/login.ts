import { Request, Response } from "express"
import Student  from "../models/student"
import bcrypt from 'bcryptjs';
import { IStudent } from '../interface/student';



type Data = 
| { msg: string }
| {
    // token: string,
    student:{
        email:      string,
        name:       string,
        lastName:   string,
        role:       string
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


        // const { email, name, lastName, role} = user


    return res.status(200).json({
        student:{
            email:      user.email,
            name:       user.name,  
            lastName:   user.lastName,
            role:       user.role
        }
    })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}