"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRepository_1 = require("./../infrastructure/data_access/baseRepository");
const IUserModel_1 = require("./../models/Areas/User/IUserModel");
class UserRepository extends baseRepository_1.default {
    constructor() {
        super(IUserModel_1.UserSchema);
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map