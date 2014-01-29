/*global define */
/* User Model */

/**
 * user model
 * @namespace app
 */


define(function (require) {
    'use strict';
    var UsersModel,
    Backbone,
    _;



    _ = require('underscore');
    Backbone = require('backbone');


    UsersModel = Backbone.Model.extend({
        initialize : function(){

        }
    });

    return UsersModel;

});