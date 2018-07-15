"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    subscriberNumber: {
        type: Number,
        required: true
    },
    subscription: {
        type: Array,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});
exports.SubscriberSchema = mongoose_1.model('subscriber', schema, 'subscribers', true);
//# sourceMappingURL=ISubscriberModel.js.map