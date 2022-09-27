import { Request, Response } from "express"
import { IStudent } from "../interface/student"
import { valitations } from '../utils'
import bcrypt from 'bcryptjs'
import Student from "../models/student"
import { generarJWT } from "../helpers/jwt"


type Data = 
| { msg: string }
| {
    token: string,
    student:{
        id:         string,
        email:      string,
        name:       string,
        lastName:   string,
        country:    string,
        role:       string
    }
}



export const registerStudent = async ( req: Request<IStudent>, res: Response<Data>)=>{

    const { 
        name        = '',
        lastName    = '', 
        email       = '',
        password    = '', 
        country     = '',    
        state       = true,
        role        = 'student',
        } = req.body

    try {

        if(name.length < 3){
            return res.status(400).json({
                msg: 'El nombre debe tener mas de 3 caracteres'
            })
        }

        if(lastName.length < 3){
            return res.status(400).json({
                msg: 'El apellido debe tener mas de 3 caracteres'
            })
        }

        if(password.length < 6){
            return res.status(400).json({
                msg: 'El password debe tener mas de 6 caracteres'
            })
        }

        // Validaciones de email

        const existeEmail = await Student.findOne({
            where:{
                email: email
            }
        })

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe usuario con email: ${email}`
            })
        }

        if(!valitations.isValidEmail( email ) ){
            return res.status(400).json({msg: 'No es un email permitido'})
        }


        if(country.length === 0){
            return res.status(400).json({
                msg: 'Debe colocar un pais'
            })
        }
        

        const user = await Student.create({
            name,    
            lastName,
            email: email.toLocaleLowerCase(), 
            password: bcrypt.hashSync( password ),
            country, 
            state,   
            role,    
            point: 0, 
        })


        const token = generarJWT( user.id )


        return res.status(201).json({
            token,
            student:{
            id:         user.id,
            email:      user.email, 
            role:       user.role, 
            name:       user.name,
            lastName:   user.lastName,
            country:    user.country
        }})
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}