var http = require('http');
var dispatcher = require('httpdispatcher');
var env = process.env;

console.log("Starting Server");
console.log("Listening to Port", env.PORT);
console.log("Listening to Address", env.BIND);

function handleRequest(request, response){
	 try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

http.createServer(handleRequest).listen(process.env.PORT);

console.log("Server Started");