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
const database_1 = __importDefault(require("../database"));
class ProductsController {
    ListProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productsList = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM producto', (err, rows, fields) => {
                    if (err)
                        reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
            });
            res.json(productsList);
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new Promise((resolve, reject) => {
                database_1.default.query('SELECT * FROM producto WHERE codigo = ?', [req.params.id], (err, rows, fields) => {
                    if (err)
                        reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
            });
            res.json(product);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO producto set ?', [req.body]);
            res.json({ message: 'Product saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM producto WHERE codigo = ?', [req.params.id]);
            res.json({ text: 'deleting product ' + req.params.id });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE producto set ? WHERE codigo = ?', [req.body, req.params.id]);
            res.json({ text: 'updating product ' + req.params.id });
        });
    }
}
const productController = new ProductsController();
exports.default = productController;
