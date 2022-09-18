import { Request, Response } from "express";
import Student from '../models/student';


export const dashboardStudent = async (req: Request, res: Response)=>{

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
