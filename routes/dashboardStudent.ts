import { Router } from "express";
import { dashboardRanking, putPoints } from "../controllers/dashboardStudent";
import { validarJWT } from "../middlewares/validateJWT";

const router = Router()


router.get('/', [
    // validarJWT
], dashboardRanking)

router.put('/:id', [
    validarJWT
], putPoints)


export default router