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
const mysql_prodotto_1 = __importDefault(require("../database/mysql/prodotto/mysql_prodotto"));
var bodyParser = require("body-parser");
function _getByName(connector, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let prodotti = yield connector.selectByName(req.query.nome);
        res.send(prodotti[0]);
    });
}
function _getByCosto(connector, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let prodotti = yield connector.selectByCosto(parseFloat(req.query.costo));
        res.send(prodotti);
    });
}
function _getByMinCostoAndMaxCosto(connector, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let min = parseFloat(req.query.costomin);
        let max = parseFloat(req.query.costomax);
        var prodotti = yield connector.selectByRangeCosto(min, max);
        res.send(prodotti);
    });
}
function _getProdotti(connector, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let prodotti = yield connector.select();
            res.send(prodotti);
        }
        catch (error) {
            res.status(400).end("Errore");
        }
    });
}
function controllParameters(query) {
    for (const property in query) {
        if (property != "nome" && property != 'img' && property != 'costo' && property != 'sconto' && property != 'id') {
            return true;
        }
    }
    return false;
}
const idIsUndefined = (prodotto, res) => {
    console.log(prodotto);
    if (!(prodotto === null || prodotto === void 0 ? void 0 : prodotto.id)) {
        return true;
    }
    return false;
};
function operation(req, res, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        if (idIsUndefined(req.params, res)) {
            res.status(404).json({ error: "id not valid" });
            return;
        }
        callback(parseInt(id));
    });
}
router.delete("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var connector = new mysql_prodotto_1.default();
        operation(req, res, (value) => __awaiter(this, void 0, void 0, function* () {
            var execute = yield connector.delete(parseInt(value));
            if (execute) {
                res.json({ error: null });
            }
            else {
                res.json({ error: "Prodotto already deleted" });
            }
        }));
    });
});
router.get("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var prodotto_mysql = new mysql_prodotto_1.default();
        operation(req, res, (value) => __awaiter(this, void 0, void 0, function* () {
            try {
                var prodotti = yield prodotto_mysql.selectById(parseInt(value));
                var prodotto = prodotti[0];
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
});
router.put("/", bodyParser.json(), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.body.id == null) {
                res.status(400).json({ error: "id not exists" });
                return;
            }
            if (controllParameters(req.body)) {
                console.log("Hello");
                res.status(400).json({ error: "parameters not valid" });
                return;
            }
            if (req.body.nome == null &&
                req.body.img == null &&
                req.body.costo == null) {
                res.status(400).json({ error: "nome, img or costo aren't present." });
                return;
            }
            var connector = new mysql_prodotto_1.default();
            var prodotto = req.body;
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
});
router.post("/", bodyParser.json(), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var connector = new mysql_prodotto_1.default();
        if (controllParameters(req.body)) {
            res.status(400).json({ error: "parameters not valid" });
            return;
        }
        var prodotto = req.body;
        try {
            var execute = yield connector.insert(prodotto);
            if (execute) {
                res.json({ error: null });
            }
            else {
                res.status(400).json({ error: "Generic Error" });
            }
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    });
});
router.get("/", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var connector = new mysql_prodotto_1.default();
        if (Object.keys(req.query).length != 0) {
            next();
            return;
        }
        _getProdotti(connector, req, res);
    });
});
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var query = req.query;
        if (Object.keys(req.query).length == 1) {
            if (query.nome != null) {
                _getByName(new mysql_prodotto_1.default(), req, res);
                return;
            }
            else if (query.costo != null) {
                _getByCosto(new mysql_prodotto_1.default(), req, res);
                return;
            }
        }
        if (Object.keys(req.query).length == 2) {
            if (query.costomin != null && req.query.costomax != null) {
                _getByMinCostoAndMaxCosto(new mysql_prodotto_1.default(), req, res);
                return;
            }
        }
        res.status(400).json({ error: "Query is not valid" });
    });
});
exports.default = router;
