"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./../infrastructure/data_access/baseRepository");
const IEvent_1 = require("./../models/Areas/Event/IEvent");
class ProductRepository extends baseRepository_1.default {
    constructor() {
        super(IEvent_1.EventSchema);
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=EventRepository.js.map