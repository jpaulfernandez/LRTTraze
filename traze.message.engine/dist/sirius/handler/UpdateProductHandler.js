"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = require("./../models/Areas/Product/ProductModel");
class UpdateProductHandler {
    static handle(data) {
        ProductModel_1.default.updateProduct(data);
    }
}
exports.default = UpdateProductHandler;
//# sourceMappingURL=UpdateProductHandler.js.map