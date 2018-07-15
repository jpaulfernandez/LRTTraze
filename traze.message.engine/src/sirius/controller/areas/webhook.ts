import * as express from 'express';
import Controller from './../../infrastructure/Controller';
import { post } from './../../infrastructure/Route';
import CommandBus from './../../infrastructure/commandBus';
import CommandData from './../../infrastructure/command';
import { handler } from './../../infrastructure/commandRegistry';


class WebhookController extends Controller{

	constructor(){
		super();
	}

	@post('/')
	public subscribeSMS(req:express.Request,res:express.Response, next:express.NextFunction)
	{
		let data = req.body;
		console.log(data);
		res.sendStatus(200);
		//CommandBus.execute(data.name,data.data);
	}
}

export default WebhookController;