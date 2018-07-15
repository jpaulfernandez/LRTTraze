import {smsFactory} from './../../smsFactory';
import {messageReducer} from './../../messageReducer';
import SubscriberModel from './../../../models/Areas/Subscriber/SubscriberModel';
import sendCommand from './command/send';
import {platformStatus} from './../../vissionControl'

export function sendMessage(
		command:sendCommand
	)
{

	console.log(command);
	let smsService = smsFactory.createNexmoInstance();
	let message:string = <string>messageReducer.reduce(command.event);

	if(command.event === 'crowd')
		platformStatus.getPlatformStatus('doroteo jose', (err,res)=>
		{
			message.replace("{condition}",res.category);
		});

	SubscriberModel.getSubscriberBasedOnEvent(command.event).then((res)=>{
		if(res)
		{
			let receivers:Array<any> = <Array<any>>res;
			receivers.forEach(value =>
			{
				smsService.sendMessage({
					message:message,
					number: value.subscriberNumber
				});
			});
		}
	},(reject)=>{
		console.log(reject);
	});

}