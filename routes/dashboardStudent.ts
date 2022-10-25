import { Router } from "express";
import { dashboardRanking, getSession, putPoints } from "../controllers/dashboardStudent";
import { validarJWT } from "../middlewares/validateJWT";

const router = Router()


router.get('/', [
    // validarJWT
], dashboardRanking)

router.get('/session/:id', [
    // validarJWT
], getSession)

router.put('/:id', [
    // validarJWT
], putPoints)


export default router