"use strict";
const dispatch_1 = require("./dispatch");
const webhook_1 = require("./webhook");
var controllerMap;
(function (controllerMap_1) {
    controllerMap_1.controllerMap = [
        dispatch_1.default,
        webhook_1.default
    ];
})(controllerMap || (controllerMap = {}));
module.exports = controllerMap;
//# sourceMappingURL=controllerMap.js.map