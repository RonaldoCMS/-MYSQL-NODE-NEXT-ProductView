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
const api_prodotto_1 = require("../api_prodotto");
require("dotenv/config");
function __api__prodotto__getFromParams__(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var prodotto_mysql = new mysql_prodotto_1.default();
        (0, api_prodotto_1.paramsCallback)(req, res, (value) => __awaiter(this, void 0, void 0, function* () {
            try {
                var prodotti = yield prodotto_mysql.selectById(parseInt(value));
                var prodotto = prodotti[0];
                prodotto.img = (0, api_prodotto_1.imgToUrl)(prodotto.img);
                if (!prodotto) {
                    res.status(404).json({ error: "prodotto not found" });
                }
                res.json(prodotto);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        }));
    });
}
exports.default = __api__prodotto__getFromParams__;
