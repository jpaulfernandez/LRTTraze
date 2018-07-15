import {subscriberHandler} from './../commandHandler/subsriber';
import {messageHandler} from './../commandHandler/messenger';

console.log('started');
const commandHandler:any = {
	...subscriberHandler(),
	...messageHandler()
}
console.log(commandHandler);

export const handler = async (event:any, callback:any) =>
{
	let command = {
		name: event.name,
		payload: event.command
	};

	let execute = commandHandler[command.name];
	await execute(command.payload);
	callback();
}