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
const UserModel_1 = require("./../../../models/Areas/User/UserModel");
class accountController extends Controller_1.default {
    constructor() {
        super();
    }
    Index(req, res, next) {
        res.send("index of accounts");
    }
    account(req, res, next) {
        let user = {
            employeeId: '0',
            firstName: 'a',
            lastName: 'a',
            middleName: 'a',
            civilStatus: 'a',
            role: 'a'
        };
        UserModel_1.default.createNewUser(user).then(function () {
            res.send("hello from accounts");
        }, function (err) {
            console.log(err);
            res.send('error');
        });
    }
    yoho(req, res, next) {
        res.send(req.params.id + " called from accounts");
    }
}
__decorate([
    Route_1.get('/')
], accountController.prototype, "Index", null);
__decorate([
    Route_1.get('/accounts')
], accountController.prototype, "account", null);
__decorate([
    Route_1.get('/pop/:id')
], accountController.prototype, "yoho", null);
exports.default = accountController;
//# sourceMappingURL=accountController.js.map