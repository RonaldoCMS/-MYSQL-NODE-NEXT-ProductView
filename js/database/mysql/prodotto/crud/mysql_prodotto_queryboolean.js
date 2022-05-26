"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../../mysql"));
function __prodotto__queryBoolean__(sql, column) {
    return new Promise((resolve, reject) => {
        mysql_1.default.query(sql, column, (error, results) => {
            if (error) {
                reject(error.sqlMessage);
            }
            else {
                console.log(results);
                if (results.affectedRows == 0)
                    resolve(false);
                else
                    resolve(true);
            }
        });
    });
}
exports.default = __prodotto__queryBoolean__;
