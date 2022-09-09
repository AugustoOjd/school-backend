import { Request, Response } from "express"




export const loginStudent = ( req: Request, res: Response)=>{
    try {
        
        return res.status(200).json({
            msg: 'login de student'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request'
        })
    }
}