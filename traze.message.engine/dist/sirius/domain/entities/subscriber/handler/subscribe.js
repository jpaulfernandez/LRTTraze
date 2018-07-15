"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriberModel_1 = require("./../../../../models/Areas/Subscriber/SubscriberModel");
function subscribe(event) {
    let subscriber = Object.assign({}, event, { active: true });
    SubscriberModel_1.default.registerSubscriber(subscriber);
}
exports.subscribe = subscribe;
//# sourceMappingURL=subscribe.js.map