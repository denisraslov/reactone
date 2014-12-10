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


    var BandView = React.createClass({

        render: function() {
            return <div className="page_profile">
                {
                    bands.map(function(band) {
                        return <Band model={band} />
                    })
                }
                </div>
        }
    });

    return BandView;
});
