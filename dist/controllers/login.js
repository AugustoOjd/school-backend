"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginStudent = void 0;
const loginStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'login de student'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request'
        });
    }
};
exports.loginStudent = loginStudent;
