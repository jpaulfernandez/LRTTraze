"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandBus {
    static add(name, command) {
        CommandBus.actions[name] = command;
    }
    static execute(name, data) {
        return CommandBus.actions[name](data);
    }
}
CommandBus.actions = {};
exports.default = CommandBus;
//# sourceMappingURL=commandBus.js.map