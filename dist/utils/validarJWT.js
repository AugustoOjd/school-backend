"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isValidToken = (token) => {
    if (!process.env.JWT_SECRET_SEED) {
        throw new Error("No hay semilla de jwt - revisar variabels de entorno");
    }
    if (token.length <= 10) {
        return Promise.reject('JWT no es valido');
    }
    return new Promise((res, rej) => {
        try {
            jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_SEED || '', (err, payload) => {
                if (err)
                    return rej('JWT no es valido');
                const { uid } = payload;
                res(uid);
            });
        }
        catch (error) {
            rej('JWT no es valido');
        }
    });
};
exports.isValidToken = isValidToken;
