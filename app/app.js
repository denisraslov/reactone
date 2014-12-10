define(function(require) {
	var Backbone = require('backbone'),
		Router = require('script/router');

	Backbone.history.start();
	Router.start();
});