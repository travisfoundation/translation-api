var restify = require( 'restify' );

module.exports.routes = function( server ) {
	server.get( {
		path: '/ping'
	}, function respond( req, res, next ) {
		res.send( req.params );
		return next();
	} );

	server.post( {
		path: '/ping'
	}, function() {
		res.send( req.params );
		return next();
	} );
};
