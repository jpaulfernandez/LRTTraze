import unsubscribeCommand from './../command/unsubscribe';
import SubscriberModel from './../../../../models/Areas/Subscriber/SubscriberModel';

export function unsubscribe(event:unsubscribeCommand
	):void {
	let subscriber = {
		...event,
		active:false
	}
	SubscriberModel.updateSubscription(subscriber);
}
