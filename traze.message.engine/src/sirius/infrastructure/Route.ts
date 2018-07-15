import Controller from "./Controller";
import * as express from "express";

module routeDecorator {

	let expressRoute:express.Router;

	const initializeRouter = ():express.Router =>
	{
		return express.Router();
	}

	export const get:any = (path:string) =>
	{
		return function(target:any, propertyKey:string, descriptor: TypedPropertyDescriptor<Function>)
		{
			let targetRouter:express.Router = target["Router"];
			if(targetRouter === undefined)
			{
				targetRouter = express.Router();
				console.log("intializing router");
			}

			targetRouter.get(path,target[propertyKey]);
			target["Router"] = targetRouter;
		}
	}

	export const post:any = (path:string) =>
	{
		return function(target:any, propertyKey:string, descriptor: TypedPropertyDescriptor<Function>)
		{
			let targetRouter:express.Router = target["Router"];
			if(targetRouter === undefined)
			{
				targetRouter = express.Router();
				console.log("intializing router");
			}

			targetRouter.post(path,target[propertyKey]);
			target["Router"] = targetRouter;
		}
	}

	export function patch(path:string)
	{

	}

	export function del(path:string)
	{

	}

	export function put(path:string)
	{

	}
}

export = routeDecorator;
