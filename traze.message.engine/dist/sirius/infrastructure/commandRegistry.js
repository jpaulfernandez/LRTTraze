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
const subsriber_1 = require("./../commandHandler/subsriber");
const messenger_1 = require("./../commandHandler/messenger");
console.log('started');
const commandHandler = Object.assign({}, subsriber_1.subscriberHandler(), messenger_1.messageHandler());
console.log(commandHandler);
exports.handler = (event, callback) => __awaiter(this, void 0, void 0, function* () {
    let command = {
        name: event.name,
        payload: event.command
    };
    let execute = commandHandler[command.name];
    yield execute(command.payload);
    callback();
});
//# sourceMappingURL=commandRegistry.js.map