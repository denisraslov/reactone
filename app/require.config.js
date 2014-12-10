require.config({

    paths: {
        'jquery': 'bower_components/jquery/dist/jquery',
        'backbone': 'bower_components/backbone/backbone',
        'lodash': 'bower_components/lodash/dist/lodash',
        'underscore': 'bower_components/underscore/underscore',
        'react': 'bower_components/react/react-with-addons',
        'views': 'script/views'
    },

    shim: {
        react: {
            exports: 'React'
        }
    }

});