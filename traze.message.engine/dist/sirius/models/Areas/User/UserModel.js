"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("./../../../repositories/UserRepository");
class UserModel {
    constructor(schema) {
        this._userModel = schema;
    }
    get firstName() {
        return this._userModel.firstName;
    }
    static createNewUser(user) {
        let p = new Promise((resolve, reject) => {
            let repo = new UserRepository_1.default();
            let newUser = user;
            repo.create(newUser, (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
        return p;
    }
    static findUser(firstName) {
        let p = new Promise((resolve, reject) => {
            let repo = new UserRepository_1.default();
            repo.find({ firstName: firstName }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    if (res.length) {
                        resolve(res[0]);
                    }
                    else {
                        resolve(undefined);
                    }
                }
            });
        });
        return p;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map