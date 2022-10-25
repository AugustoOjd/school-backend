"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardStudent_1 = require("../controllers/dashboardStudent");
const router = (0, express_1.Router)();
router.get('/', [
// validarJWT
], dashboardStudent_1.dashboardRanking);
router.get('/session/:id', [
// validarJWT
], dashboardStudent_1.getSession);
router.put('/:id', [
// validarJWT
], dashboardStudent_1.putPoints);
exports.default = router;
