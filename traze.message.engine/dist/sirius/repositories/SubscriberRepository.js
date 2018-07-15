"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./../infrastructure/data_access/baseRepository");
const ISubscriberModel_1 = require("./../models/Areas/Subscriber/ISubscriberModel");
class ProductRepository extends baseRepository_1.default {
    constructor() {
        super(ISubscriberModel_1.SubscriberSchema);
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=SubscriberRepository.js.map