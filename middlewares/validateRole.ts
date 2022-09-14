import {Request, Response, NextFunction} from 'express'

// import { body, CustomValidator } from 'express-validator';
// // This allows you to reuse the validator
// const isValidUser: CustomValidator = value => {
//   return User.findUserByEmail(value).then(user => {
//     if (user) {
//       return Promise.reject('E-mail already in use');
//     }
//   });
// };


export const isAdminRole = (req: Request, res: Response, next: NextFunction)=>{



    const { role, name} = req.body

    if(role !== 'admin'){
        return res.status(401).json({ msg: `${name} no tiene los permisos de administrador`})
    }


    next()

}


