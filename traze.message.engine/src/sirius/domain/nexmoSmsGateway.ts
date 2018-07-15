import * as request from 'request';

export class nexmoSmsGateway
{
	
	private _from:string = 'LRT-1'
	constructor(){
		
	}

	public async sendMessage(receiver:{message:string,number:number})
	{
		console.log(receiver.message);
		request.post({
			url:"https://rest.nexmo.com/sms/json",
			headers: {'content-type' : 'application/json'},
  			body: JSON.stringify({
  				api_key:'68954f2f',
  				api_secret: '9dVyyz9sRSXvBJBV',
  				to: receiver.number,
  				from: 'LRT-1',
  				text: receiver.message
  			})
		},function(err,res,body){
			console.log(body);
		});	
	}
}