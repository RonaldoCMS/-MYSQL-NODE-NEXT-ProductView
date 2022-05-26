"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_prodotto_queryboolean_1 = __importDefault(require("./mysql_prodotto_queryboolean"));
function __prodotto__insert__(e) {
    return (0, mysql_prodotto_queryboolean_1.default)("INSERT INTO prodotto (nome, img, costo, sconto) VALUES (?,?,?,?)", [e.nome, e.img, e.costo, e.sconto]);
}
exports.default = __prodotto__insert__;
