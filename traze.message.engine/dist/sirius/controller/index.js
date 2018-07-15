"use strict";
const express = require("express");
const controllerMap_1 = require("./areas/controllerMap");
var expressRoute;
(function (expressRoute) {
    expressRoute.initializeGlobalRoute = () => {
        let router = express.Router();
        controllerMap_1.controllerMap.forEach((controller) => {
            let a = new controller();
            if (a.Router !== undefined) {
                router.use(extractPathName(controller.name), a.Router);
            }
            else {
                console.log("no routes detected at " + controller.name);
            }
        });
        return router;
    };
    const extractPathName = (n) => {
        return '/' + n.replace('Controller', '');
    };
})(expressRoute || (expressRoute = {}));
module.exports = expressRoute;
//# sourceMappingURL=index.js.map