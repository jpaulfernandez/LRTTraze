"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./../infrastructure/data_access/baseRepository");
const IProductModel_1 = require("./../models/Areas/Product/IProductModel");
class ProductRepository extends baseRepository_1.default {
    constructor() {
        super(IProductModel_1.ProductSchema);
    }
    findByProductType(productType, callback) {
        return this.find({ productType: productType }, callback);
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map