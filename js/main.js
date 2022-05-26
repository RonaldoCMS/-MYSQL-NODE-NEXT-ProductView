"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const method_override_1 = __importDefault(require("method-override"));
const express_1 = __importDefault(require("express"));
const api_prodotto_1 = __importDefault(require("./router/api_prodotto"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, method_override_1.default)());
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: "error body" });
});
app.use('/prodotto', api_prodotto_1.default);
app.set('json spaces', 3);
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));
exports.default = app;
