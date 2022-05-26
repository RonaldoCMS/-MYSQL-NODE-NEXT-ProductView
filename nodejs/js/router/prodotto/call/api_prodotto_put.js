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
function __api__prodotto__put(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        var data = JSON.parse(req.body.data);
        console.log("IMG ->" + ((_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname));
        try {
            if (data.id == null) {
                res.status(400).json({ error: "id not exists" });
                return;
            }
            if ((0, api_prodotto_1.paramsIsNotAccettable)(data)) {
                res.status(400).json({ error: "parameters not valid" });
                return;
            }
            if (req.body.nome == null &&
                req.file == null &&
                req.body.costo == null) {
                res.status(400).json({ error: "nome, img or costo aren't present." });
                return;
            }
            var connector = new mysql_prodotto_1.default();
            var prodotto = data;
            if (req.file != null) {
                prodotto.img = req.file.originalname;
                prodotto.img = (0, api_prodotto_1.imgToUrl)(prodotto.img);
            }
            var execute = yield connector.update(prodotto);
            if (execute) {
                res.json({ error: null });
            }
            else {
                res.status(400).json({ error: "generic error" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    });
}
exports.default = __api__prodotto__put;
