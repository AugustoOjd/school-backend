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
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("../routes/admin"));
const login_1 = __importDefault(require("../routes/login"));
const register_1 = __importDefault(require("../routes/register"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = require("../db/dbConnection");
// Crearon de tablas
// import { Admin } from './admin';
// import { Student } from './student';
class Server {
    constructor() {
        this.paths = {
            student: '/api/students',
            login: '/api/login',
            register: '/api/register'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Base de datos
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // Definir rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbConnection_1.sequelize.authenticate();
                // await Admin.sync()
                // await Student.sync()
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.paths.student, admin_1.default),
            this.app.use(this.paths.login, login_1.default),
            this.app.use(this.paths.register, register_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
