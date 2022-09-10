import { Router } from 'express'
import { getStudents, getStudent, putStudent, deleteStudent   } from '../controllers/admin'

const router = Router()



router.get('/', [

], getStudents )

router.get('/:id', [

], getStudent )

router.put('/:id', [

], putStudent )

router.delete('/:id', [

], deleteStudent )



export default router
