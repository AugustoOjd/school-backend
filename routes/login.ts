import { Router } from "express";
import { loginStudent } from '../controllers/login'
import { check } from 'express-validator';
import { validarCampos } from "../middlewares/validarCampos";


const router = Router()


router.post( '/', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').notEmpty(),
    validarCampos
], loginStudent )



export default router