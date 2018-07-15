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
const subscribe_1 = require("./../domain/entities/subscriber/handler/subscribe");
const updateSubscription_1 = require("./../domain/entities/subscriber/handler/updateSubscription");
const unsubscribe_1 = require("./../domain/entities/subscriber/handler/unsubscribe");
exports.subscriberHandler = () => ({
    subscribe: (event) => __awaiter(this, void 0, void 0, function* () {
        subscribe_1.subscribe(event);
    }),
    unsubscribe: (event) => __awaiter(this, void 0, void 0, function* () {
        unsubscribe_1.unsubscribe(event);
    }),
    updateSubscription: (event) => __awaiter(this, void 0, void 0, function* () {
        updateSubscription_1.updateSubscription(event);
    })
});
//# sourceMappingURL=subsriber.js.map