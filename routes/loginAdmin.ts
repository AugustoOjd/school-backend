import { Router } from 'express';
import { loginAdmin } from '../controllers/loginAdmin';


const router = Router()


router.post('/', loginAdmin)



export default router