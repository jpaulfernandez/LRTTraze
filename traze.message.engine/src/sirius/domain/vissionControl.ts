import * as request from 'request';

export const platformStatus = ({
	getPlatformStatus:(location:string,callback:(err:any,res:any)=>void)=>{
		request.get({
			uri:"http://localhost:3003/public/v1/crowd/platform/" + encodeURIComponent(location) 
		},(err,req,body)=>{
			callback(err,body);
		});
	}
});
