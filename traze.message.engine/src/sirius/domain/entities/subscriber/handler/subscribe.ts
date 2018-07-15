import subscribeCommand from './../command/subscribe';
import SubscriberModel from './../../../../models/Areas/Subscriber/SubscriberModel';
import {ISubscriberModel} from './../../../../models/Areas/Subscriber/ISubscriberModel';

export function subscribe(event:subscribeCommand
	):void {
	
	let subscriber = {
		...event,
		active:true
	}
	SubscriberModel.registerSubscriber(subscriber);
}
