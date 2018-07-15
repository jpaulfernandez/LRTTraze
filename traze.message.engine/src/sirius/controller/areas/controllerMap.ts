import dispatchController from './dispatch';
import webhookController from './webhook';

module controllerMap {
	export const controllerMap = [
		dispatchController,
		webhookController
	]
}

export = controllerMap;