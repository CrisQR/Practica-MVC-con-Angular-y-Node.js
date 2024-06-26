"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
class ProductsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsController_1.default.ListProducts);
        this.router.get('/:id', productsController_1.default.getProduct);
        this.router.post('/', productsController_1.default.create);
        this.router.delete('/:id', productsController_1.default.delete);
        this.router.put('/:id', productsController_1.default.update);
    }
}
const productsRoutes = new ProductsRoutes();
//Exportar unicamente el enrutador
exports.default = productsRoutes.router;
