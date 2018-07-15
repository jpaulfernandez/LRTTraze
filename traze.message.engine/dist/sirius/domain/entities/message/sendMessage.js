"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smsFactory_1 = require("./../../smsFactory");
const messageReducer_1 = require("./../../messageReducer");
const SubscriberModel_1 = require("./../../../models/Areas/Subscriber/SubscriberModel");
const vissionControl_1 = require("./../../vissionControl");
function sendMessage(command) {
    console.log(command);
    let smsService = smsFactory_1.smsFactory.createNexmoInstance();
    let message = messageReducer_1.messageReducer.reduce(command.event);
    if (command.event === 'crowd')
        vissionControl_1.platformStatus.getPlatformStatus('doroteo jose', (err, res) => {
            console.log(res);
            console.log(err);
            message.replace("{condition}", res.category);
        });
    SubscriberModel_1.default.getSubscriberBasedOnEvent(command.event).then((res) => {
        if (res) {
            console.log(res);
            let receivers = res;
            receivers.forEach(value => {
                smsService.sendMessage({
                    message: message,
                    number: value.subscriberNumber
                });
            });
        }
    }, (reject) => {
        console.log(reject);
    });
}
exports.sendMessage = sendMessage;
//# sourceMappingURL=sendMessage.js.map