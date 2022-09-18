"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardStudent_1 = require("../controllers/dashboardStudent");
const router = (0, express_1.Router)();
router.get('/', [
// validarJWT
], dashboardStudent_1.dashboardStudent);
exports.default = router;
