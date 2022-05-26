"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_prodotto_queryboolean_1 = __importDefault(require("./mysql_prodotto_queryboolean"));
function __prodotto__delete__(id) {
    return (0, mysql_prodotto_queryboolean_1.default)("DELETE FROM prodotto where id = ?", [id]);
}
exports.default = __prodotto__delete__;
