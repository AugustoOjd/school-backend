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
exports.registerStudent = void 0;
const utils_1 = require("../utils");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const student_1 = require("../models/student");
const registerStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name = '', lastName = '', email = '', password = '', country = '', state = true, role = 'student', point = 0 } = req.body;
    try {
        if (name.length < 3) {
            return res.status(400).json({
                msg: 'El nombre debe tener mas de 6 caracteres'
            });
        }
        if (lastName.length < 3) {
            return res.status(400).json({
                msg: 'El apellido debe tener mas de 6 caracteres'
            });
        }
        if (password.length < 6) {
            return res.status(400).json({
                msg: 'El password debe tener mas de 6 caracteres'
            });
        }
        // Validaciones de email
        const existeEmail = yield student_1.Student.findOne({
            where: {
                email: email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: `Ya existe usuario con email: ${email}`
            });
        }
        if (!utils_1.valitations.isValidEmail(email)) {
            return res.status(400).json({ msg: 'No es un email permitido' });
        }
        if (country.length === 0) {
            return res.status(400).json({
                msg: 'Debe colocar un pais'
            });
        }
        yield student_1.Student.create({
            name,
            lastName,
            email: email.toLocaleLowerCase(),
            password: bcryptjs_1.default.hashSync(password),
            country,
            state,
            role,
            point,
        });
        // const student = Student.build(newStudent)
        // await student.save()
        return res.status(201).json({ student: {
                email,
                role,
                name,
                lastName,
                country
            } });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
});
exports.registerStudent = registerStudent;
