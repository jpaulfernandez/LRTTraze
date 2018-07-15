import { ISubscriberModel } from './ISubscriberModel';
import SubscriberRepository from './../../../repositories/SubscriberRepository';

export default class SubscriberModel
{
	private _subscriberModel:ISubscriberModel;

	constructor(schema:ISubscriberModel)
	{
		this._subscriberModel = schema;
	}

	public static registerSubscriber(newSubscriber:any): Promise<object>
	{
		let p = new Promise<object>((resolve,reject) => {
			let repo = new SubscriberRepository();

			repo.findOne({subscriberNumber:newSubscriber.subscriberNumber}).then((res:any)=>
			{
				if(res)
					reject("Subscriber already registered");

				repo.create(newSubscriber, (err, res)=>
				{
					if(err)
						reject(err);

					resolve(res);
				});
			})

			
		});

		return p;
	}

	public static updateSubscription(subscriberToUpdate:any): Promise<object>
	{
		let p = new Promise<object>((resolve,reject) => 
		{
			let repo = new SubscriberRepository();

			repo.findOne({subscriberNumber:subscriberToUpdate.subscriberNumber},(err,res)=>
			{
				if(err)
					reject(err);

				if(!res)
					reject("No subscriber found");

				repo.update(res._id,subscriberToUpdate,(err,res)=>
				{
					if(err)
						reject(err);

					resolve(res);
				});
			})
		})

		return p;
	}

	public static getSubscriberBasedOnEvent(event:string): Promise<object>
	{
		let p = new Promise<object>((resolve,reject)=>
		{
			let repo = new SubscriberRepository();

			repo.find({$and:[{subscription:event},{active:true}]},{},(err:any,res:any)=>
			{
				if(err)
					reject(err);

				resolve(res);
			})
		})
		return p; 
	}
}