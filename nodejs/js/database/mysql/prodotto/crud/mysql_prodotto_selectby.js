"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../../mysql"));
function __prodotto__select__byValue__(key, value) {
    return new Promise((resolve, reject) => {
        mysql_1.default.query("SELECT * FROM prodotto where " + key, value, (error, results, fields) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log(results);
            resolve(results);
        });
    });
}
exports.default = __prodotto__select__byValue__;
