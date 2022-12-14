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
exports.deleteStudent = exports.postStudent = exports.putStudent = exports.getStudent = exports.getStudents = void 0;
const student_1 = __importDefault(require("../models/student"));
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
const getStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'get ok, estudiante por id'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request students'
        });
    }
};
exports.getStudent = getStudent;
const putStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'put act por id'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
};
exports.putStudent = putStudent;
const postStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'post estudiante'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
};
exports.postStudent = postStudent;
const deleteStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'delete estudiante por id'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
};
exports.deleteStudent = deleteStudent;
