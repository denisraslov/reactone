require.config({paths:{jquery:"bower_components/jquery/dist/jquery",backbone:"bower_components/backbone/backbone",lodash:"bower_components/lodash/dist/lodash",react:"bower_components/react/react-with-addons",views:"script/views"},shim:{react:{exports:"React"}}}),define("require.config",function(){}),require({baseUrl:""},["require.config"],function(){require(["app"])}),define("main",function(){});