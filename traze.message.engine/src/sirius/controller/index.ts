import * as express from 'express';
import * as fs from 'fs';
import { controllerMap } from './areas/controllerMap';
import Controller from '../infrastructure/Controller';

module expressRoute {

	export const initializeGlobalRoute = ():express.Router =>
	{
		let router:express.Router = express.Router();
		controllerMap.forEach((controller) => 
		{
			let a = new controller();
			if(a.Router !== undefined)
			{
				router.use(extractPathName(controller.name), a.Router);
			}else{
				console.log("no routes detected at " + controller.name);
			}
		})

		return router;
	}

	const extractPathName = (n:string):string => 
	{
		return '/' + n.replace('Controller', '');
	}
}

export = expressRoute;