"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = require("./../models/Areas/Product/ProductModel");
class AddUserHandler {
    static handle(data) {
        ProductModel_1.default.createProduct(data);
    }
}
exports.default = AddUserHandler;
//# sourceMappingURL=AddProductHandler.js.map