// This variable provides an "Asynchronous Crypto" secret and function for the database
const crypto = require('crypto').randomBytes(256).toString('hex');

// This function "exports" the database connection for use elsewhere in this application
module.exports = {
	// These are this "connection object" for the "ndwebsdb" database
	uri: 'mongodb://localhost:27017/' + this.db,
	secret: crypto,
	db: 'ndwebsmongodb'
}