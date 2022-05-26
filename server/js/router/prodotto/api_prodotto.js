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
exports.imgToUrl = exports.paramsCallback = exports.idIsUndefined = exports.paramsIsNotAccettable = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
var router = express_1.default.Router();
const api_prodotto_deleteFromParams_1 = __importDefault(require("./call/api_prodotto_deleteFromParams"));
const api_prodotto_getAll_1 = __importDefault(require("./call/api_prodotto_getAll"));
const api_prodotto_getby_1 = __importDefault(require("./call/api_prodotto_getby"));
const api_prodotto_getFromParams_1 = __importDefault(require("./call/api_prodotto_getFromParams"));
const api_prodotto_post_1 = __importDefault(require("./call/api_prodotto_post"));
const api_prodotto_put_1 = __importDefault(require("./call/api_prodotto_put"));
var bodyParser = require("body-parser");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        console.log(req);
        var spliter = file.originalname.split(".");
        var last = spliter.length - 1;
        cb(null, `${Date.now()}.${spliter[last]}`);
    }
});
const upload = (0, multer_1.default)({ storage: storage, dest: 'uploads/' });
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, api_prodotto_deleteFromParams_1.default)(req, res); }));
router.get("/:id", (req, res) => (0, api_prodotto_getFromParams_1.default)(req, res));
router.put("/", bodyParser.json(), upload.single('img'), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, api_prodotto_put_1.default)(req, res); }));
router.post("/", bodyParser.json(), upload.single('img'), (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, api_prodotto_post_1.default)(req, res); }));
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { return (0, api_prodotto_getAll_1.default)(req, res, next); }));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, api_prodotto_getby_1.default)(req, res); }));
function paramsIsNotAccettable(query) {
    console.log(typeof query);
    for (const property in query) {
        if (property != "nome" && property != 'costo' && property != 'sconto' && property != 'id') {
            console.log(property);
            return true;
        }
    }
    return false;
}
exports.paramsIsNotAccettable = paramsIsNotAccettable;
const idIsUndefined = (prodotto, res) => {
    console.log(prodotto);
    if (!(prodotto === null || prodotto === void 0 ? void 0 : prodotto.id)) {
        return true;
    }
    return false;
};
exports.idIsUndefined = idIsUndefined;
function paramsCallback(req, res, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        if ((0, exports.idIsUndefined)(req.params, res)) {
            res.status(404).json({ error: "id not valid" });
            return;
        }
        callback(parseInt(id));
    });
}
exports.paramsCallback = paramsCallback;
function imgToUrl(img) {
    return `${process.env.HOST}:${process.env.PORT}/uploads/${img}`;
}
exports.imgToUrl = imgToUrl;
exports.default = router;
