"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const poligono_routes_1 = __importDefault(require("./routes/poligono.routes"));
const coordenada_routes_1 = __importDefault(require("./routes/coordenada.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/", poligono_routes_1.default);
app.use("/", coordenada_routes_1.default);
exports.default = app;
