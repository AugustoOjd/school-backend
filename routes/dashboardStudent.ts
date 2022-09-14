import { Router } from "express";
import { dashboardStudent } from "../controllers/dashboardStudent";
import { validarJWT } from "../middlewares/validateJWT";

const router = Router()


router.get('/', [
    validarJWT
], dashboardStudent)


export default router