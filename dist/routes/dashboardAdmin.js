"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardAdmin_1 = require("../controllers/dashboardAdmin");
const validateRole_1 = require("../middlewares/validateRole");
const validateJWT_1 = require("../middlewares/validateJWT");
const validarSuperAdmin_1 = require("../middlewares/validarSuperAdmin");
const router = (0, express_1.Router)();
router.get('/', [
// validarJWTAdmin,
// check('role').isIn(['admin']),
// isAdminRole,
], dashboardAdmin_1.getStudents);
router.get('/:id', [
    validateJWT_1.validarJWTAdmin,
    validateRole_1.isAdminRole,
], dashboardAdmin_1.getStudent);
router.put('/:id', [
    // validarJWTAdmin,
    validarSuperAdmin_1.isSuperAdminRole
], dashboardAdmin_1.putStudent);
router.delete('/:id', [
    validateJWT_1.validarJWTAdmin,
], dashboardAdmin_1.deleteStudent);
exports.default = router;
