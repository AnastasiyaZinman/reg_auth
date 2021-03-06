var express = require('express');
const bodyParser = require('body-parser');
const api = require('./serverApis/usersApi')
// const router = express.Router();
var app = express();
//----------------------------
if (app.get('env') === 'development') {
	require('dotenv').load();
	const cors = require('cors');
	app.use(cors());
}
//----------------------------
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api)

const SERVER_PORT=5001;
//-------------------------
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}
//-------------------------------------------
app.get('/', function (req, res) {
    res.send('Hello World!');
});
 
//---------------------------------
app.listen(SERVER_PORT, function () {
    console.log('Example app listening on port 5001!');
});