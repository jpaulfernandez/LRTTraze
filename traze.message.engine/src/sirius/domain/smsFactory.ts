import {nexmoSmsGateway} from './nexmoSmsGateway';

export class smsFactory
{
	public static createNexmoInstance(){
		return new nexmoSmsGateway();
	}
}