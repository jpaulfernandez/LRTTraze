"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    eventName: {
        type: String,
        required: true
    },
    subscribers: {
        type: Array,
        required: true
    }
});
exports.EventSchema = mongoose_1.model('event', schema, 'events', true);
//# sourceMappingURL=IEvent.js.map