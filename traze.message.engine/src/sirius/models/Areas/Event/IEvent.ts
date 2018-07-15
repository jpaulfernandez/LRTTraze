import { Schema, model, Document} from "mongoose";

export interface IEventModel extends Document
{
	eventName:string,
	subscribers:Array<string>
}

let schema =  new Schema({
	eventName:{
		type:String,
		required:true
	},
	subscribers:{
		type:Array,
		required:true
	}
});

export let EventSchema = model<IEventModel>('event',schema,'events',true);
