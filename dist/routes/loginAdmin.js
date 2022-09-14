"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const loginAdmin_1 = require("../controllers/loginAdmin");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('email', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').notEmpty(),
    validarCampos_1.validarCampos
], loginAdmin_1.loginAdmin);
exports.default = router;
