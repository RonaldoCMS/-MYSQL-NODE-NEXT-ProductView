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
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const mysql_prodotto_1 = __importDefault(require("../database/mysql/mysql_prodotto"));
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var prodotto_mysql = new mysql_prodotto_1.default();
        try {
            var prodotti = yield prodotto_mysql.select();
            console.log(prodotti);
            res.send(prodotti);
        }
        catch (error) {
            res.status(400).end("Errore");
            console.log(error);
        }
        console.log("Ciao a tutti");
    });
});
exports.default = router;
