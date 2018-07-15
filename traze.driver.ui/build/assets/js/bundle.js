(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var sendMessage = function (event) {
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
};
document.getElementById('accident').addEventListener('click', function () {
    sendMessage('accident');
});
document.getElementById('power_failure').addEventListener('click', function () {
    sendMessage('power_failure');
});
document.getElementById('malfunction').addEventListener('click', function () {
    sendMessage('malfunction');
});
document.getElementById('suspension').addEventListener('click', function () {
    sendMessage('suspension');
});
document.getElementById('delay').addEventListener('click', function () {
    sendMessage('delay');
});
document.getElementById('secret').addEventListener('click', function () {
    sendMessage('crowd');
});
document.getElementById('secret1').addEventListener('click', function () {
    alert('asd');
    sendMessage('arrival');
});
document.getElementById('secret2').addEventListener('click', function () {
    sendMessage('pre_arrival');
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvYXNzZXRzL3RzL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0NBLElBQUksV0FBVyxHQUFHLFVBQVMsS0FBWTtJQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsU0FBUyxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7WUFDZCxTQUFTLEVBQUUsT0FBTztTQUNuQjtLQUNGLENBQUMsQ0FBQztJQUVILElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFFL0IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7SUFDN0QsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFRCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUM1RCxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUNqRSxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUE7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUMvRCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUM5RCxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUN6RCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUMxRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFHSCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUMzRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDYixXQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFHSCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQztJQUMzRCxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbnZhciBzZW5kTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50OnN0cmluZyl7XG5cdHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuXHQgIFwibmFtZVwiOiBcInNlbmRcIixcblx0ICBcImNvbW1hbmRcIjoge1xuXHQgICAgXCJldmVudFwiOiBldmVudCxcblx0ICAgIFwic3RhdGlvblwiOiBcImRqb3NlXCJcblx0ICB9XG5cdH0pO1xuXG5cdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuXHQgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0ICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcblx0ICB9XG5cdH0pO1xuXG5cdHhoci5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9wdWJsaWMvdjEvZGlzcGF0Y2hcIik7XG5cdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiY29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJjYWNoZS1jb250cm9sXCIsIFwibm8tY2FjaGVcIik7XG5cblx0eGhyLnNlbmQoZGF0YSk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NpZGVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXHRzZW5kTWVzc2FnZSgnYWNjaWRlbnQnKVxufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3dlcl9mYWlsdXJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cdHNlbmRNZXNzYWdlKCdwb3dlcl9mYWlsdXJlJylcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFsZnVuY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblx0c2VuZE1lc3NhZ2UoJ21hbGZ1bmN0aW9uJylcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VzcGVuc2lvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXHRzZW5kTWVzc2FnZSgnc3VzcGVuc2lvbicpXG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG5cdHNlbmRNZXNzYWdlKCdkZWxheScpXG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3JldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXHRzZW5kTWVzc2FnZSgnY3Jvd2QnKVxufSk7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3JldDEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcblx0YWxlcnQoJ2FzZCcpO1xuXHRzZW5kTWVzc2FnZSgnYXJyaXZhbCcpXG59KTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjcmV0MicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuXHRzZW5kTWVzc2FnZSgncHJlX2Fycml2YWwnKVxufSk7XG4iXX0=
