
var sendMessage = function(event:string){
	var data = JSON.stringify({
	  "name": "send",
	  "command": {
	    "event": event,
	    "station": "djose"
	  }
	});

	var xhr = new XMLHttpRequest();

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});

	xhr.open("POST", "http://localhost:3002/public/v1/dispatch");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.setRequestHeader("cache-control", "no-cache");

	xhr.send(data);
}

document.getElementById('accident').addEventListener('click',function(){
	sendMessage('accident')
});

document.getElementById('power_failure').addEventListener('click',function(){
	sendMessage('power_failure')
});

document.getElementById('malfunction').addEventListener('click',function(){
	sendMessage('malfunction')
});

document.getElementById('suspension').addEventListener('click',function(){
	sendMessage('suspension')
});

document.getElementById('delay').addEventListener('click',function(){
	sendMessage('delay')
});

document.getElementById('secret').addEventListener('click',function(){
	sendMessage('crowd')
});


document.getElementById('secret1').addEventListener('click',function(){
	sendMessage('pre_arrival')
});


document.getElementById('secret2').addEventListener('click',function(){
	sendMessage('arrival')
});
