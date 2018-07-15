import RepositoryBase from './../infrastructure/data_access/baseRepository';
import { IEventModel, EventSchema} from './../models/Areas/Event/IEvent'; 

export default class ProductRepository extends RepositoryBase<IEventModel>
{
	constructor(){
		super(EventSchema);
	}
}