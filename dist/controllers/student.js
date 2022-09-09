"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.postStudent = exports.putStudent = exports.getStudent = exports.getStudents = void 0;
const getStudents = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'get ok, lista de estudiantes'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request all students'
        });
    }
};
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
