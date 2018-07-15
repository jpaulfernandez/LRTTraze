import { subscribe } from './../domain/entities/subscriber/handler/subscribe';
import { updateSubscription} from './../domain/entities/subscriber/handler/updateSubscription';
import { unsubscribe} from './../domain/entities/subscriber/handler/unsubscribe';
import subscribeCommand from './../domain/entities/subscriber/command/subscribe';
import unsubscribeCommand from './../domain/entities/subscriber/command/unsubscribe';
import updateSubscriptionCommand from './../domain/entities/subscriber/command/updateSubscription';

export const subscriberHandler = ():any =>({
	subscribe: async (event:subscribeCommand) =>
	{
		subscribe(event);
	},
	unsubscribe: async (event:unsubscribeCommand) =>
	{
		unsubscribe(event);
	},
	updateSubscription: async (event:updateSubscriptionCommand) =>
	{
		updateSubscription(event);
	}
});