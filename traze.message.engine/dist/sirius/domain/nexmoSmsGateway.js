"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class nexmoSmsGateway {
    constructor() {
        this._from = 'LRT-1';
    }
    sendMessage(receiver) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(receiver.message);
            request.post({
                url: "https://rest.nexmo.com/sms/json",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    api_key: '68954f2f',
                    api_secret: '9dVyyz9sRSXvBJBV',
                    to: receiver.number,
                    from: 'LRT-1',
                    text: receiver.message
                })
            }, function (err, res, body) {
                console.log(body);
            });
        });
    }
}
exports.nexmoSmsGateway = nexmoSmsGateway;
//# sourceMappingURL=nexmoSmsGateway.js.map