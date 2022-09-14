import { Router } from "express";
import { loginStudent } from '../controllers/login'


const router = Router()


router.post( '/', [

], loginStudent )



export default router