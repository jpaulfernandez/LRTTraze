import CommandData from './command';

type Command<In extends CommandData, Out> = (data: In) => Out;

interface CommandRegistry {
    [x: string]: Command<CommandData, any>;
}

interface command
{
	name:string,
	payload:object
}

class CommandBus{

	private static actions: CommandRegistry = {};

	static add(name: string, command: Command<CommandData, any>) {
        CommandBus.actions[name] = command;
    }

    static execute<T>(name: string, data: CommandData) : T {
        return CommandBus.actions[name](data);
    }
}

export default CommandBus;