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
const dashboardAdmin_1 = __importDefault(require("../routes/dashboardAdmin"));
const login_1 = __importDefault(require("../routes/login"));
const register_1 = __importDefault(require("../routes/register"));
const loginAdmin_1 = __importDefault(require("../routes/loginAdmin"));
const dashboardStudent_1 = __importDefault(require("../routes/dashboardStudent"));
const seed_data_admin_1 = __importDefault(require("../routes/seed-data-admin"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = require("../db/dbConnection");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
// Crearon de tablas
const admin_1 = __importDefault(require("./admin"));
const student_1 = __importDefault(require("./student"));
class Server {
    constructor() {
        this.paths = {
            // paths administradores
            dashboard: '/api/admin/dashboard',
            loginAdmin: '/api/admin',
            seedData: '/api/seed-data',
            // paths estudiantes
            dashboardStudent: '/api/student/dashboard',
            login: '/api/login',
            register: '/api/register',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '5432';
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
                yield admin_1.default.sync();
                yield student_1.default.sync();
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, helmet_1.default)());
        // CORS
        this.app.use((0, cors_1.default)({
            origin: 'https://u-culture-augustoojd.vercel.app',
            methods: 'GET, PUT, PATCH, POST, DELETE',
            credentials: true
        }));
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
        // this.app.use('/public', express.static(path.join(__dirname, 'static')))
    }
    routes() {
        this.app.use(this.paths.dashboard, dashboardAdmin_1.default),
            this.app.use(this.paths.login, login_1.default),
            this.app.use(this.paths.register, register_1.default),
            this.app.use(this.paths.loginAdmin, loginAdmin_1.default),
            this.app.use(this.paths.dashboardStudent, dashboardStudent_1.default);
        this.app.use(this.paths.seedData, seed_data_admin_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
