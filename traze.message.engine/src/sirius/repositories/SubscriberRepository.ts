import RepositoryBase from './../infrastructure/data_access/baseRepository';
import { ISubscriberModel, SubscriberSchema} from './../models/Areas/Subscriber/ISubscriberModel'; 

export default class ProductRepository extends RepositoryBase<ISubscriberModel>
{
	constructor(){
		super(SubscriberSchema);
	}
}