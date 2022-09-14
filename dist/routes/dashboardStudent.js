"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardStudent_1 = require("../controllers/dashboardStudent");
const validateJWT_1 = require("../middlewares/validateJWT");
const router = (0, express_1.Router)();
router.get('/', [
    validateJWT_1.validarJWT
], dashboardStudent_1.dashboardStudent);
exports.default = router;
