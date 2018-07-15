'use strict';

import * as mongoose from 'mongoose';
import * as bodyparser from 'body-parser';
import * as express from 'express';
import { initializeGlobalRoute } from './sirius/controller/index';
// import CommandRegistry from './sirius/command/commandRegistry';


class AppStart{

	public server:express.Application;

	public static bootstrap():AppStart{
		return new AppStart();
	}

	constructor(){
		this.server = express();
		this._config();
		this._routes();
		this._registerCommands();
		this._connect().then(() => {
			console.log("Connected on Mongodb");
			this._listen();
		});
	}

	private _routes(){
		let router: express.Router;
		router = express.Router();
		this.server.use('/public/v1',initializeGlobalRoute());
		
	}

	private _config(){
		this.server.use(bodyparser.json());
		this.server.use(bodyparser.urlencoded({extended:true}));
	}

	private _connect(){
		let options = { server: { socketOptions: { keepAlive: 1 } } };
		return mongoose.connect('mongodb://localhost:27017/traze', options);
	}

	private _listen(){
		this.server.listen(3002,() => {
			console.log("Listening on port 3002");
		})
	}

	private _registerCommands(){
		// CommandRegistry.RegisterAllCommands();
	}
}


AppStart.bootstrap();