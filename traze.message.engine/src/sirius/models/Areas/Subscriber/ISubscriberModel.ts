import { Schema, model, Document} from "mongoose";

export interface ISubscriberModel extends Document
{
	subscriberNumber:number,
	subscription:Array<String>,
	active:boolean
}

let schema =  new Schema({
	subscriberNumber:{
		type:Number,
		required:true
	},
	subscription:{
		type:Array,
		required:true
	},
	active:
	{
		type:Boolean,
		required:true
	}
});

export let SubscriberSchema = model<ISubscriberModel>('subscriber',schema,'subscribers',true);
