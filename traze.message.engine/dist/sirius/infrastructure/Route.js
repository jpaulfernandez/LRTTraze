"use strict";
const express = require("express");
var routeDecorator;
(function (routeDecorator) {
    let expressRoute;
    const initializeRouter = () => {
        return express.Router();
    };
    routeDecorator.get = (path) => {
        return function (target, propertyKey, descriptor) {
            let targetRouter = target["Router"];
            if (targetRouter === undefined) {
                targetRouter = express.Router();
                console.log("intializing router");
            }
            targetRouter.get(path, target[propertyKey]);
            target["Router"] = targetRouter;
        };
    };
    routeDecorator.post = (path) => {
        return function (target, propertyKey, descriptor) {
            let targetRouter = target["Router"];
            if (targetRouter === undefined) {
                targetRouter = express.Router();
                console.log("intializing router");
            }
            targetRouter.post(path, target[propertyKey]);
            target["Router"] = targetRouter;
        };
    };
    function patch(path) {
    }
    routeDecorator.patch = patch;
    function del(path) {
    }
    routeDecorator.del = del;
    function put(path) {
    }
    routeDecorator.put = put;
})(routeDecorator || (routeDecorator = {}));
module.exports = routeDecorator;
//# sourceMappingURL=Route.js.map