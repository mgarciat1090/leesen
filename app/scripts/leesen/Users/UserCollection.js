/*global define */
/* Book Collection */

/**
 * Book Collection
 * @namespace app
 */


define(function (require) {
    'use strict';
    var UserCollection,
    App,
    Backbone,
    Templates,
    _;

    Templates = require('Templates');
    _ = require('underscore');
    Backbone = require('backbone');

    App = App || {};
    App.Users = {};
    App.Users.Model = require('UserModel');

    UserCollection = Backbone.Collection.extend({
        model : App.Users.Model
    });



    return UserCollection;
});