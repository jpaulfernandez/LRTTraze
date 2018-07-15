import * as express from 'express';

abstract class Controller
{
	public Router:express.Router;

	constructor(){

	}

	public initializeRoute():express.Router
	{
		return express.Router();
	}

}

export default Controller;