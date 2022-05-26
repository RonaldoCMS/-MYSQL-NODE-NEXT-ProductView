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
function __api__prodotto_deleteFromParams(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var connector = new mysql_prodotto_1.default();
        (0, api_prodotto_1.paramsCallback)(req, res, (value) => __awaiter(this, void 0, void 0, function* () {
            var execute = yield connector.delete(parseInt(value));
            if (execute) {
                res.json({ error: null });
            }
            else {
                res.json({ error: "Prodotto already deleted" });
            }
        }));
    });
}
exports.default = __api__prodotto_deleteFromParams;
