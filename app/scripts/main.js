require.config({
    hbs: {
        disableHelpers: true,
        disableI18n: true
    },
    paths: {
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'console-shim': '../bower_components/console-shim/console-shim',
        'handlebars': '../bower_components/require-handlebars-plugin/Handlebars',
        'hbs': '../bower_components/require-handlebars-plugin/hbs',
        'i18nprecompile': '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore-amd/underscore',
        'backbone': '../bower_components/backbone-amd/backbone',
        'json2': '../bower_components/json2/json2',
    },
    shim: {
        'console-shim': {
            exports: 'console'
        },
        'Backbone' : {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'json2': {
            exports: 'JSON'
        },
    }
});

/**
 * App start
 *
 * @namespace main
 * @version 0.0.0
 */
require(['leesen/app'], function(App) {
    'use strict';

    var router = new App.Routers.R1();
    Backbone.history.start({ pushState : true});

});