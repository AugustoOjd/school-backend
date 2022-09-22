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
exports.validarJWTAdmin = exports.validarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const student_1 = __importDefault(require("../models/student"));
const admin_1 = __importDefault(require("../models/admin"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token = '' } = req.cookies;
    console.log(token);
    // const token = req.header('x-token')
    if (!token) {
        return res.status(401).json({ msg: 'no existen el token' });
    }
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY_JWT);
        const user = yield student_1.default.findByPk(uid);
        if (!user) {
            return res.status(401).json({ msg: 'Usuario no existe en db' });
        }
        if (!user.state) {
            return res.status(401).json({ msg: 'Token no autorizado' });
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ msg: 'Token no valido' });
    }
});
exports.validarJWT = validarJWT;
const validarJWTAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token = '' } = req.cookies;
    if (!token) {
        return res.status(401).json({ msg: 'no existen el token' });
    }
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY_JWT);
        const user = yield admin_1.default.findByPk(uid);
        if (!user) {
            return res.status(401).json({ msg: 'Usuario no existe en db' });
        }
        if (user.role !== 'admin') {
            return res.status(401).json({ msg: 'Este usuario no es administrador' });
        }
        if (!user.state) {
            return res.status(401).json({ msg: 'Token no autorizado' });
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ msg: 'Token no valido' });
    }
});
exports.validarJWTAdmin = validarJWTAdmin;
