"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nexmoSmsGateway_1 = require("./nexmoSmsGateway");
class smsFactory {
    static createNexmoInstance() {
        return new nexmoSmsGateway_1.nexmoSmsGateway();
    }
}
exports.smsFactory = smsFactory;
//# sourceMappingURL=smsFactory.js.map