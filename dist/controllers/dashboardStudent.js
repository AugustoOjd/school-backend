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
exports.getSession = exports.putPoints = exports.dashboardRanking = void 0;
const student_1 = __importDefault(require("../models/student"));
const dashboardRanking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPoints = yield student_1.default.findAll({
            attributes: ['name', 'point', 'state']
        });
        return res.status(200).json(allPoints);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request dashboard students'
        });
    }
});
exports.dashboardRanking = dashboardRanking;
const putPoints = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { point } = req.body;
    try {
        const student = yield student_1.default.findByPk(id);
        if (!student) {
            return res.status(400).json({
                msg: 'No se encontro ese estudiante con id: ' + id
            });
        }
        if (student) {
            yield student_1.default.update({ point: point }, {
                where: {
                    id: id
                }
            });
        }
        return res.status(201).json({
            msg: 'Actulizado correctamente',
            point: point
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request put points'
        });
    }
});
exports.putPoints = putPoints;
const getSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const student = yield student_1.default.findByPk(id);
        if (!student) {
            return res.status(400).json({
                msg: 'No existe usuario con ese id'
            });
        }
        return res.status(200).json({
            user: {
                id: student.id,
                email: student.email,
                name: student.name,
                lastName: student.lastName,
                role: student.role,
                state: student.state,
                point: student.point
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request students'
        });
    }
});
exports.getSession = getSession;
