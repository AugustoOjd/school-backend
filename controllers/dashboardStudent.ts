import { Request, Response } from "express";
import Student from '../models/student';


type Data = 
| { msg: string }
| { user:{
    id:         string,
    email:      string,
    name:       string,
    lastName:   string,
    role:       string,
    state:      boolean,
    point:      number,
    nivel:      number
}
}


export const dashboardRanking = async (req: Request, res: Response)=>{

    try {

        const allPoints = await Student.findAll({
            attributes: [ 'name', 'point', 'state']
            
        })
        
        return res.status(200).json(allPoints)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request dashboard students'
        })
    }
}

export const putPoints = async (req: Request, res: Response) =>{

    const { id } = req.params

    const { point, nivel } = req.body

    try {
        
        const student = await Student.findByPk( id )

        if(!student){
            return res.status(400).json({
                msg: 'No se encontro ese estudiante con id: ' + id
            })
        }

        if(student){
            await Student.update({ point: point, nivel: nivel}, {
                where: {
                    id: id
                }
            }) 
        }


        return res.status(201).json(student)

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request put points'
        })
    }

}


export const getSession = async (req: Request, res: Response<Data>)=>{


    const { id } = req.params

    try {

        const student = await Student.findByPk(id)

        if(!student){
            return res.status(400).json({
                msg: 'No existe usuario con ese id'
            })
        }

        return res.status(200).json({
            user:{
                id:         student.id,
                email:      student.email,
                name:       student.name,  
                lastName:   student.lastName,
                role:       student.role,
                state:      student.state,
                point:      student.point,
                nivel:      student.nivel
            }   
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request students'
        })
    }
}