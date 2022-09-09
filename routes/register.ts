import { Router } from "express";
import { registerStudent } from '../controllers/register'

const router = Router()


router.post( '/', [
    
], registerStudent )



export default router