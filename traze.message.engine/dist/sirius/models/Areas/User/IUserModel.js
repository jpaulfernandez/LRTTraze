"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let schema = new mongoose_1.Schema({
    employeeId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    civilStatus: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: false
    },
    contactNo: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
});
exports.UserSchema = mongoose_1.model('user', schema, 'users', true);
//# sourceMappingURL=IUserModel.js.map