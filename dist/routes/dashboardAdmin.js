"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardAdmin_1 = require("../controllers/dashboardAdmin");
const validateRole_1 = require("../middlewares/validateRole");
const router = (0, express_1.Router)();
router.get('/', [
    // check('role').isIn(['admin']),
    validateRole_1.isAdminRole,
], dashboardAdmin_1.getStudents);
router.get('/:id', [], dashboardAdmin_1.getStudent);
router.put('/:id', [], dashboardAdmin_1.putStudent);
router.delete('/:id', [], dashboardAdmin_1.deleteStudent);
exports.default = router;
