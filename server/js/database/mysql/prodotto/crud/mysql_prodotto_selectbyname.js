"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_prodotto_selectby_1 = __importDefault(require("./mysql_prodotto_selectby"));
function __prodotto__select__byName__(name) {
    return (0, mysql_prodotto_selectby_1.default)("nome = ?", name);
}
exports.default = __prodotto__select__byName__;
