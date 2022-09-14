"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginAdmin_1 = require("../controllers/loginAdmin");
const router = (0, express_1.Router)();
router.post('/', [], loginAdmin_1.loginAdmin);
exports.default = router;
