/**
 * @jsx React.DOM
 */

'use strict';

define(function(require, exports, module) {

    var React = require('react'),
        model = {
            name: 'Enter Shikari',
            count: 5
        };


    var BandView = React.createClass({displayName: 'BandView',

        render: function() {

            var band__count = '';

            if (model.count > 1) {
                band__count = React.createElement("div", {className: "band__count"}, model.count);
            }

            return React.createElement("div", {className: "band"}, model.name, band__count)
        }
    });

    return BandView;
});
