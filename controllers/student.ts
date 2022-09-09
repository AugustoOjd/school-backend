import { Request, Response } from 'express'




export const getStudents = ( req: Request, res: Response)=>{

    try {
        return res.status(200).json({
            msg: 'get ok, lista de estudiantes'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request all students'
        })
    }
}


export const getStudent = (req: Request, res: Response)=>{

    try {
        return res.status(200).json({
            msg: 'get ok, estudiante por id'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request students'
        })
    }
} 


export const putStudent = (req: Request, res: Response)=>{
    try {
        return res.status(200).json({
            msg: 'put act por id'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
} 


export const postStudent = (req: Request, res: Response)=>{
    try {
        return res.status(200).json({
            msg: 'post estudiante'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }

}


export const deleteStudent = (req: Request, res: Response)=>{
    try {
        return res.status(200).json({
            msg: 'delete estudiante por id'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}