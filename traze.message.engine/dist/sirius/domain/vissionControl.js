"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
exports.platformStatus = ({
    getPlatformStatus: (location, callback) => {
        request.get({
            uri: "http://localhost:3003/public/v1/crowd/platform/" + encodeURIComponent(location)
        }, (err, req, body) => {
            callback(err, body);
        });
    }
});
//# sourceMappingURL=vissionControl.js.map