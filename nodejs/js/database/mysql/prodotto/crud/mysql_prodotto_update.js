"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_prodotto_queryboolean_1 = __importDefault(require("./mysql_prodotto_queryboolean"));
function __prodotto__update__(e) {
    var options = [];
    var sql = "UPDATE prodotto SET ";
    if (e.nome != null) {
        sql += "nome = ?, ";
        options.push(e.nome);
    }
    if (e.img != null) {
        sql += "img = ?, ";
        options.push(e.img);
    }
    if (e.costo != null) {
        sql += "costo = ?, ";
        options.push(e.costo);
    }
    if (e.sconto != null) {
        sql += "sconto = ?, ";
        options.push(e.sconto);
    }
    sql = sql.slice(0, -2);
    sql += " WHERE id = ?";
    options.push(e.id);
    return (0, mysql_prodotto_queryboolean_1.default)(sql, options);
}
exports.default = __prodotto__update__;
