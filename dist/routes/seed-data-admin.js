"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardAdmin_1 = require("../controllers/dashboardAdmin");
const router = (0, express_1.Router)();
router.post('/admin', dashboardAdmin_1.createAdmin);
exports.default = router;
