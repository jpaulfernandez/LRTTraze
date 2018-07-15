"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = require("./../../../repositories/ProductRepository");
class ProductModel {
    constructor(schema) {
        this._productModel = schema;
    }
    static createProduct(newProduct) {
        let p = new Promise((resolve, reject) => {
            let repo = new ProductRepository_1.default();
            repo.create(newProduct, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
    static updateProduct(productToUpdate) {
        let p = new Promise((resolve, reject) => {
            let repo = new ProductRepository_1.default();
            repo.update(productToUpdate._id, productToUpdate, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
    static retrieveAllProduct() {
        let p = new Promise((resolve, reject) => {
            let repo = new ProductRepository_1.default();
            repo.retrieve((err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
    static filterByProductType(productType) {
        let p = new Promise((resolve, reject) => {
            let repo = new ProductRepository_1.default();
            repo.findByProductType(productType, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
}
exports.default = ProductModel;
//# sourceMappingURL=ProductModel.js.map