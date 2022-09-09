import { Router } from 'express'
import { getStudents, getStudent, putStudent, postStudent, deleteStudent   } from '../controllers/student'

const router = Router()



router.get('/', [

], getStudents )

router.get('/:id', [

], getStudent )

router.put('/:id', [

], putStudent )

router.post('/', [

], postStudent )

router.delete('/:id', [

], deleteStudent )



export default router
