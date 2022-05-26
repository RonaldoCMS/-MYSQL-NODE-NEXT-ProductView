"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("./mysql"));
class MySQLProdotto {
    constructor() {
        this._queryBoolean = (sql, column) => new Promise((resolve, reject) => {
            mysql_1.default.query(sql, column, (error, results) => {
                console.log("Riga 20");
                if (error) {
                    reject(error);
                }
                if (results.affectedRows == 0)
                    resolve(false);
                else
                    resolve(true);
            });
        });
        this.insert = (e) => this._queryBoolean("INSERT INTO prodotto (nome, img, costo, sconto) VALUES (?,?,?,?)", [e.nome, e.img, e.costo, e.sconto]);
        this.delete = (id) => this._queryBoolean("DELETE FROM prodotto where id = ?", [id]);
        this.select = () => new Promise((resolve, reject) => {
            mysql_1.default.query("SELECT * FROM prodotto", (error, results, fields) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            });
        });
        this._selectBy = (byWhat, value) => new Promise((resolve, reject) => {
            mysql_1.default.query("SELECT * FROM prodotto where " + byWhat, value, (error, results, fields) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });
        });
        this.selectById = (id) => this._selectBy("id = ?", id);
        this.selectByName = (name) => this._selectBy("nome = ?", name);
        this.selectByCosto = (costo) => this._selectBy("costo = ?", costo);
    }
    update(e) {
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
        return this._queryBoolean(sql, options);
    }
    selectByRangeCosto(min, max) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query("SELECT * FROM prodotto where costo >= ? and costo <= ?", [min, max], (error, results, fields) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            });
        });
    }
}
exports.default = MySQLProdotto;
