"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controllers/login");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('email', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').notEmpty(),
    validarCampos_1.validarCampos
], login_1.loginStudent);
exports.default = router;
