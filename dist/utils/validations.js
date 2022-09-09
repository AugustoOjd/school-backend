"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.isValidEmail = void 0;
const isValidEmail = (email) => {
    const match = String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !!match;
};
exports.isValidEmail = isValidEmail;
const isEmail = (email) => {
    return (0, exports.isValidEmail)(email)
        ? undefined
        : 'El correo no parece ser válido';
};
exports.isEmail = isEmail;
