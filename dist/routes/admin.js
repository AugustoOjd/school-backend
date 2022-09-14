"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("../controllers/admin");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.get('/', [
    (0, express_validator_1.check)('role').isIn(['admin']),
    // isAdminRole,
], admin_1.getStudents);
router.get('/:id', [], admin_1.getStudent);
router.put('/:id', [], admin_1.putStudent);
router.delete('/:id', [], admin_1.deleteStudent);
exports.default = router;
