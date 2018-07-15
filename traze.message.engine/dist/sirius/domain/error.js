"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeError = (err) => {
    return new Error(err);
};
exports.default = {
    productAlreadyExist: makeError('PRODUCT_ALREADY_EXIST')
};
//# sourceMappingURL=error.js.map