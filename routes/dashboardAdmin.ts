import { Router } from 'express'
import { getStudents, 
        getStudent, 
        putStudent, 
        deleteStudent   } from '../controllers/dashboardAdmin' 
import {check} from 'express-validator'
import { isAdminRole } from '../middlewares/validateRole'
import { validarJWTAdmin } from '../middlewares/validateJWT'


const router = Router()



router.get('/', [
    validarJWTAdmin,
    // check('role').isIn(['admin']),

    isAdminRole,
], getStudents )

router.get('/:id', [
    validarJWTAdmin,
], getStudent )

router.put('/:id', [
    validarJWTAdmin,
], putStudent )

router.delete('/:id', [
    validarJWTAdmin,
], deleteStudent )



export default router
