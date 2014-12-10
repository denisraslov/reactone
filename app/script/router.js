
define(function(require, exports, module) {

    var Backbone = require('backbone');
    var React = require('react');

    var Router = Backbone.Router.extend({
        routes: {
            'profile(/)': 'profile'
        },

        profile: function(query, page) {

            var ProfilePageView = require('views/pages/profile')

            React.render(React.createElement(ProfilePageView), document.getElementById('content'));
        }
    });

    return new Router();
});
