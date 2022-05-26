"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_prodotto_delete_1 = __importDefault(require("./crud/mysql_prodotto_delete"));
const mysql_prodotto_insert_1 = __importDefault(require("./crud/mysql_prodotto_insert"));
const mysql_prodotto_select_1 = __importDefault(require("./crud/mysql_prodotto_select"));
const mysql_prodotto_selectbycosto_1 = __importDefault(require("./crud/mysql_prodotto_selectbycosto"));
const mysql_prodotto_selectbyid_1 = __importDefault(require("./crud/mysql_prodotto_selectbyid"));
const mysql_prodotto_selectbyname_1 = __importDefault(require("./crud/mysql_prodotto_selectbyname"));
const mysql_prodotto_selectByRangeCosto_1 = __importDefault(require("./crud/mysql_prodotto_selectByRangeCosto"));
const mysql_prodotto_update_1 = __importDefault(require("./crud/mysql_prodotto_update"));
class MySQLProdotto {
    insert(e) {
        return (0, mysql_prodotto_insert_1.default)(e);
    }
    update(e) {
        return (0, mysql_prodotto_update_1.default)(e);
    }
    delete(id) {
        return (0, mysql_prodotto_delete_1.default)(id);
    }
    select() {
        return (0, mysql_prodotto_select_1.default)();
    }
    selectById(id) {
        return (0, mysql_prodotto_selectbyid_1.default)(id);
    }
    selectByName(name) {
        return (0, mysql_prodotto_selectbyname_1.default)(name);
    }
    selectByCosto(costo) {
        return (0, mysql_prodotto_selectbycosto_1.default)(costo);
    }
    selectByRangeCosto(min, max) {
        return (0, mysql_prodotto_selectByRangeCosto_1.default)(min, max);
    }
}
exports.default = MySQLProdotto;
