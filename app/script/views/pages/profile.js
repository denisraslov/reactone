/**
 * @jsx React.DOM
 */

'use strict';

define(function(require, exports, module) {

    var React = require('react'),
        Band = require('views/band');

    var bands = [
        {
            name: 'Enter Shikari',
            count: 5
        },
        {
            name: 'Asking Alexandria',
            count: 1
        },
        {
            name: 'Hadouken!',
            count: 2
        }
    ];


    var BandView = React.createClass({displayName: 'BandView',

        render: function() {
            return React.createElement("div", {className: "page_profile"}, 
                
                    bands.map(function(band) {
                        return React.createElement(Band, {model: band})
                    })
                
                )
        }
    });

    return BandView;
});
