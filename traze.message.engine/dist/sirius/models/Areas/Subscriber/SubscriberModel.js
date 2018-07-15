"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SubscriberRepository_1 = require("./../../../repositories/SubscriberRepository");
class SubscriberModel {
    constructor(schema) {
        this._subscriberModel = schema;
    }
    static registerSubscriber(newSubscriber) {
        let p = new Promise((resolve, reject) => {
            let repo = new SubscriberRepository_1.default();
            repo.findOne({ subscriberNumber: newSubscriber.subscriberNumber }).then((res) => {
                if (res)
                    reject("Subscriber already registered");
                repo.create(newSubscriber, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        });
        return p;
    }
    static updateSubscription(subscriberToUpdate) {
        let p = new Promise((resolve, reject) => {
            let repo = new SubscriberRepository_1.default();
            repo.findOne({ subscriberNumber: subscriberToUpdate.subscriberNumber }, (err, res) => {
                if (err)
                    reject(err);
                if (!res)
                    reject("No subscriber found");
                repo.update(res._id, subscriberToUpdate, (err, res) => {
                    if (err)
                        reject(err);
                    resolve(res);
                });
            });
        });
        return p;
    }
    static getSubscriberBasedOnEvent(event) {
        let p = new Promise((resolve, reject) => {
            let repo = new SubscriberRepository_1.default();
            repo.find({ $and: [{ subscription: event }, { active: true }] }, {}, (err, res) => {
                if (err)
                    reject(err);
                resolve(res);
            });
        });
        return p;
    }
}
exports.default = SubscriberModel;
//# sourceMappingURL=SubscriberModel.js.map