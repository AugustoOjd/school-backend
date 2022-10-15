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
exports.deleteStudent = exports.putStudent = exports.getStudent = exports.getStudents = void 0;
const student_1 = __importDefault(require("../models/student"));
// Creacion seed de admins
// export const createAdmin = async (req: Request, res: Response)=>{
//     const { name        = '',
//             lastName    = '', 
//             email       = '', 
//             password    = '',
//             role        = 'admin',
//             state       = true
//         } = req.body
//     try {
//         const admin = await Admin.create({
//             name,    
//             lastName,
//             email: email.toLocaleLowerCase(),   
//             password: bcrypt.hashSync( password ),
//             role,   
//             state,   
//         })
//         return res.status(200).json(admin)
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({
//             msg: 'bad request seed-data'
//         })
//     }
// }
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.default.findAll();
        return res.status(200).json(students);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request all students'
        });
    }
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const student = yield student_1.default.findByPk(id);
        return res.status(200).json(student);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request students'
        });
    }
});
exports.getStudent = getStudent;
const putStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const student = yield student_1.default.findByPk(id);
        if (!student) {
            return res.status(400).json({ msg: `Este estudiante con ${id} no existe` });
        }
        yield student.update(req.body);
        return res.status(200).json(student);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
});
exports.putStudent = putStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, state } = req.body;
    try {
        const student = yield student_1.default.findByPk(id);
        yield (student === null || student === void 0 ? void 0 : student.update({ state: state }));
        return res.status(200).json(student);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
});
exports.deleteStudent = deleteStudent;
