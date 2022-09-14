import { Router } from 'express'
import { getStudents, 
        getStudent, 
        putStudent, 
        deleteStudent   } from '../controllers/dashboardAdmin' 
import {check} from 'express-validator'
import { isAdminRole } from '../middlewares/validateRole'


const router = Router()



router.get('/', [
    // check('role').isIn(['admin']),
    isAdminRole,
], getStudents )

router.get('/:id', [

], getStudent )

router.put('/:id', [

], putStudent )

router.delete('/:id', [

], deleteStudent )



export default router
