// This variable brings in the "express" package
const express = require('express');

// This creates and instance of the "express" ndwebslication
const ndwebs = express();

// This variable brings in the "mongoose" package
const mongoose = require('mongoose');

// This varaible accesses the "ndwebsdb" database
const ndwebsconfig = require('./ndwebsconfig/ndwebsdb');

// This variable brings in the "path" package
const path = require('path');

// This is for the "mongoosePromise"
mongoose.Promise = global.Promise;

// This variable allows "mongoose" to connect to the database
mongoose.connect(ndwebsconfig.uri, (err) => {
	if (err) {
		console.log('Could NOT connect to the ' + ndwebsconfig.db + 'database: ', err);
	} else {
		console.log(ndwebsconfig.db + ': Database Connection Successful!');
	}
});

// This provides a way for the "back-end" to access the "front-end"
ndwebs.use(express.static(__dirname + '/ndwebs-front-end/nextdimensionwebs2018-p/'));

// This is the first "get" request for this ndwebslication
ndwebs.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/ndwebs-front-end/nextdimensionwebs2018-p/index.html'));
});

// This creates the "listening port" for this ndwebslication
ndwebs.listen(4500, () => {
	console.log('NDWeb Server listening on port 4500');
});