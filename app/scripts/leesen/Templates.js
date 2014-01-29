/**
 * templates.js
 *
 * Provides a single point of reference for template inclusion and naming. all application
 * templates should be registered here, with a consistent name
 */
define(function (require){
    'use strict';
    var _ = require('underscore'),
        Templates = {
            SideBar: require('hbs!./Templates/SideBar'),
            UserView: require('hbs!./Templates/UserView'),
        };

    return Templates;
});
