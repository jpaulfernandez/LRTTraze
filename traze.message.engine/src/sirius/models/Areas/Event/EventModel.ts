import { IEventModel } from './IEvent';
import EventRepositor from './../../../repositories/EventRepository';

export default class SubscriberModel
{
	private _eventModel:IEventModel;

	constructor(schema:IEventModel)
	{
		this._eventModel = schema;
	}
}