
var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.send('Hello World');
});
app.get('/home', function(request, response) {
	app.use(express.static('public'));
	response.render('index');
});


app.get('/game/:num', function(request, response) {
	var round = request.params['num'];
	var targetNumber = 42;
	var returned = "";
	if(round < 1 || round > 100) {
		returned = "Something went wrong! You must enter a number between 1 and 100!"
	}else if(round > targetNumber) {
		returned = "Guess lower!";
	}else if(round < targetNumber) {
		returned = "Guess higher!"
	}else if(round == targetNumber) {
		returned = "Congratulations! You got it! You are the single greatest human to ever exist!";
	}else {
		returned = "Something went wrong! You must enter a number between 1 and 100!"
	}
	response.render('game', {highOrLow: returned});
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Example app listening on port 3000!');
});
