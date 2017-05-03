var express = require('express');
var app = express();
app.set('view engine', 'ejs');

function log(req) {
    var date = new Date();
    console.log(date.toLocaleTimeString() + " [" + req.originalUrl + "]");
}

app.get('/', function(req, res) {
	log(req);
	res.render('index.ejs');
});

app.use('/static', express.static(__dirname + '/static'));

app.listen(5882, function() {
	console.log('Timer listening on port 5882.');
});

