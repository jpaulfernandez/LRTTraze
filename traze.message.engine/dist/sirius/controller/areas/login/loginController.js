"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./../../../infrastructure/Controller");
const Route_1 = require("./../../../infrastructure/Route");
class LoginController extends Controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        res.send("index of login");
    }
    login(req, res, next) {
        res.send("hello from login");
    }
    logout(req, res, next) {
        res.send("pop" + "pop pop pop");
    }
}
__decorate([
    Route_1.get('/')
], LoginController.prototype, "Index", null);
__decorate([
    Route_1.get('/hello')
], LoginController.prototype, "login", null);
__decorate([
    Route_1.get('/pop')
], LoginController.prototype, "logout", null);
exports.default = LoginController;
//# sourceMappingURL=loginController.js.map