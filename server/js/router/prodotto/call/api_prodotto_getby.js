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
const mysql_prodotto_1 = __importDefault(require("../../../database/mysql/prodotto/mysql_prodotto"));
require("dotenv/config");
const api_prodotto_1 = require("../api_prodotto");
function __api__prodotto_getBy__(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var query = req.query;
        var connector = new mysql_prodotto_1.default();
        if (Object.keys(req.query).length == 1) {
            if (query.nome != null) {
                let prodotti = yield connector.selectByName(req.query.nome);
                prodotti[0].img = (0, api_prodotto_1.imgToUrl)(prodotti[0].img);
                res.send(prodotti[0]);
                return;
            }
            else if (query.costo != null) {
                let prodotti = yield connector.selectByCosto(parseFloat(req.query.costo));
                res.send(prodotti);
                return;
            }
        }
        if (Object.keys(req.query).length == 2) {
            if (query.costomin != null && req.query.costomax != null) {
                let min = parseFloat(req.query.costomin);
                let max = parseFloat(req.query.costomax);
                var prodotti = yield connector.selectByRangeCosto(min, max);
                res.send(prodotti);
                return;
            }
        }
        res.status(400).json({ error: "Query is not valid" });
    });
}
exports.default = __api__prodotto_getBy__;
