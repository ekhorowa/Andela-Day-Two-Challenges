//GIT-HUB API PROGRAM
function loadUserProfile(username) {

	const http = require('https');// importing the https module and assigning it to constant http
	
	var options = {//Creating an object  
		host: 'api.github.com',//
		path: '/users/' + username,
		method: 'GET',
		headers: {'user-agent': 'node.js'}
	};

	http.get(options, function(response) {//http.get in this program is requesting data from github.com
	  
	  response.on('data', function(data) {//response is a Node.js event emitter, response.on hooks up a callback for an event
	    
	    var dataString = data.toString();//converting the data gotten to string using the string method
	    console.log(dataString);//printing out  the result gotten from github

	  });
	  
	})
	.on("error", function(error_1) {//when an error occurs while running the program,
	  
	  console.log("An error occured: " + error_1.message);//'An error occured :' is printed out to the screen concatenated with the the error message
	  
	});
}

loadUserProfile('ekhorowa');//my user profile for git is loaded here for testing
