"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./../../infrastructure/Controller");
const Route_1 = require("./../../infrastructure/Route");
class WebhookController extends Controller_1.default {
    constructor() {
        super();
    }
    subscribeSMS(req, res, next) {
        let data = req.body;
        console.log(data);
        res.sendStatus(200);
        //CommandBus.execute(data.name,data.data);
    }
}
__decorate([
    Route_1.post('/')
], WebhookController.prototype, "subscribeSMS", null);
exports.default = WebhookController;
//# sourceMappingURL=webhook.js.map