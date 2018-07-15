import updateSubscriptionCommand from './../command/updateSubscription';
import SubscriberModel from './../../../../models/Areas/Subscriber/SubscriberModel';

export function updateSubscription(event:updateSubscriptionCommand
	):void {
	SubscriberModel.updateSubscription(event);
}
