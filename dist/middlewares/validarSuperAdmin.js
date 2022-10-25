"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuperAdminRole = void 0;
const admin_1 = __importDefault(require("../models/admin"));
const isSuperAdminRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(401).json({ msg: 'EL es id invalido' });
    }
    try {
        const admin = yield admin_1.default.findByPk(id);
        if (!admin) {
            return res.status(401).json({ msg: 'Usuario no existe en db' });
        }
        if (admin.role !== 'SuperAdmin') {
            return res.status(401).json({ msg: 'Este usuario no es super admin' });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ msg: 'bad request en validacion Role' });
    }
    next();
});
exports.isSuperAdminRole = isSuperAdminRole;
