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
exports.loginStudent = void 0;
const student_1 = __importDefault(require("../models/student"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const loginStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email = '', password = '' } = req.body;
    try {
        const user = yield student_1.default.findOne({
            where: {
                email: email
            }
        });
        // console.log(user)
        if (!user) {
            return res.status(400).json({
                msg: 'El correo electronico no existe'
            });
        }
        if (!bcryptjs_1.default.compareSync(password, user.password)) {
            return res.status(400).json({ msg: 'Correo o password no valido - PASSWORD' });
        }
        // const { email, name, lastName, role} = user
        return res.status(200).json({
            student: {
                email: user.email,
                name: user.name,
                lastName: user.lastName,
                role: user.role
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
});
exports.loginStudent = loginStudent;
