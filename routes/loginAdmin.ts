import { Router } from 'express';
import { check } from 'express-validator';
import { loginAdmin } from '../controllers/loginAdmin';
import { validarCampos } from '../middlewares/validarCampos';


const router = Router()


router.post('/', [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').notEmpty(),
    validarCampos
], loginAdmin)



export default router