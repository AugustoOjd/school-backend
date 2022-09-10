import { Request, Response } from 'express'
import Student from '../models/student';




export const getStudents = async ( req: Request, res: Response)=>{

    try {

        const students = await Student.findAll()

        return res.status(200).json(students)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request all students'
        })
    }
}


export const getStudent = async (req: Request, res: Response)=>{


    const { id } = req.params

    try {

        const student = await Student.findByPk(id)

        return res.status(200).json(student)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request students'
        })
    }
} 


export const putStudent = async (req: Request, res: Response)=>{

    const { id } = req.params

    try {

        const student = await Student.findByPk(id)

        if(!student){
            return res.status(400).json({ msg: `Este estudiante con ${id} no existe`})
        }

        await student.update( req.body )

        return res.status(200).json(student)
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
} 


export const deleteStudent = async (req: Request, res: Response)=>{

    const { id } = req.params
    
    try {

        const student = await Student.findByPk(id)

        await student?.update({state: false})

        return res.status(200).json(student)

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}