'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const express = require("express");
const index_1 = require("./sirius/controller/index");
// import CommandRegistry from './sirius/command/commandRegistry';
class AppStart {
    static bootstrap() {
        return new AppStart();
    }
    constructor() {
        this.server = express();
        this._config();
        this._routes();
        this._registerCommands();
        this._connect().then(() => {
            console.log("Connected on Mongodb");
            this._listen();
        });
    }
    _routes() {
        let router;
        router = express.Router();
        this.server.use('/public/v1', index_1.initializeGlobalRoute());
    }
    _config() {
        this.server.use(bodyparser.json());
        this.server.use(bodyparser.urlencoded({ extended: true }));
    }
    _connect() {
        let options = { server: { socketOptions: { keepAlive: 1 } } };
        return mongoose.connect('mongodb://localhost:27017/traze', options);
    }
    _listen() {
        this.server.listen(3002, () => {
            console.log("Listening on port 3002");
        });
    }
    _registerCommands() {
        // CommandRegistry.RegisterAllCommands();
    }
}
AppStart.bootstrap();
//# sourceMappingURL=index.js.map