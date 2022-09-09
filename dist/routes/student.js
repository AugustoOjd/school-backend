"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = (0, express_1.Router)();
router.get('/', [], student_1.getStudents);
router.get('/:id', [], student_1.getStudent);
router.put('/:id', [], student_1.putStudent);
router.post('/', [], student_1.postStudent);
router.delete('/:id', [], student_1.deleteStudent);
exports.default = router;