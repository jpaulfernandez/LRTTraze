import { sendMessage } from './../domain/entities/message/sendMessage';
import sendCommand from './../domain/entities/message/command/send';
 
export const messageHandler = ():any =>({
	send: async (event:sendCommand) =>
	{
		sendMessage(event);
	}
});