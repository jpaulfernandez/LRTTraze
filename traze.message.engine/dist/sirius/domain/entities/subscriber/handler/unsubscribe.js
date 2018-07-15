"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriberModel_1 = require("./../../../../models/Areas/Subscriber/SubscriberModel");
function unsubscribe(event) {
    let subscriber = Object.assign({}, event, { active: false });
    SubscriberModel_1.default.updateSubscription(subscriber);
}
exports.unsubscribe = unsubscribe;
//# sourceMappingURL=unsubscribe.js.map