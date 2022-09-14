import { Request, Response } from "express";


export const dashboardStudent = (req: Request, res: Response)=>{

    try {
        
        return res.status(200).json({
            msg: 'Dashboard student ok'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            msg: 'bad request dashboard students'
        })
    }
}
