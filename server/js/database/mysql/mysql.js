"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
require("dotenv/config");
var connection = mysql_1.default.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PSW,
    database: process.env.DATABASE_NOME
});
exports.default = connection;
