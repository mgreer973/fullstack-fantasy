var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// for ajax
//var path = require('path');

var app = express();

var port = process.env.PORT || 3000;
//app.listen(port);
app.listen(port, function() {
	console.log("App listening on port: " + port);
});
//allow sessions
// app.use(session({ secret: 'app', cookie: { maxAge: 60000 }}));
app.use(session({
    secret: 'topsecret',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// app.use(bodyParser.urlencoded({	extended: false }));

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard. ajax
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var application_controller = require('./controllers/application_controller.js');
var admin_controller = require('./controllers/admin_controller.js');
var users_controller = require('./controllers/users_controller.js');

//var scoreboard_controller = require('./controllers/scoreboard_controller.js');
//app.use('/scoreboard', scoreboard_controller);

app.use('/', application_controller);
app.use('/admin', admin_controller);
app.use('/users', users_controller);

var players_controller = require('./controllers/players_controller.js');
app.use('/players', players_controller);

var user_players_controller = require('./controllers/user_players_controller.js');
app.use('/user_players', user_players_controller);

// ================================================================================
// ROUTER ajax
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
