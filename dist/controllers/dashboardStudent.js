"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardStudent = void 0;
const dashboardStudent = (req, res) => {
    try {
        return res.status(200).json({
            msg: 'Dashboard student ok'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'bad request dashboard students'
        });
    }
};
exports.dashboardStudent = dashboardStudent;
