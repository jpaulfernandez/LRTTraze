"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandBus_1 = require("./../infrastructure/commandBus");
const handler = require("./../handler");
class CommandRegistry {
    static RegisterAllCommands() {
        let h = handler;
        Object.keys(handler).forEach((key) => {
            let commandName = key.replace('Handler', '').toLowerCase();
            console.log(commandName);
            commandBus_1.default.add(commandName, h[key]['handle']);
        });
    }
    static AddCommand(commandName, commandHandler) {
        commandBus_1.default.add(commandName, commandHandler);
    }
}
exports.default = CommandRegistry;
//# sourceMappingURL=commandRegistry.js.map