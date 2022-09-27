import { Request, Response } from "express";
import Student from '../models/student';


export const dashboardRanking = async (req: Request, res: Response)=>{

    try {

        const allPoints = await Student.findAll({
            attributes: [ 'name', 'point']
            
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

    const { point } = req.body

    try {
        
        const student = await Student.findByPk( id )

        if(!student){
            return res.status(400).json({
                msg: 'No se encontro ese estudiante con id: ' + id
            })
        }

        if(student){
            await Student.update({ point: point}, {
                where: {
                    id: id
                }
            }) 
        }


        return res.status(201).json({
            msg: 'Actulizado correctamente', 
            point: point
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request put points'
        })
    }

}
