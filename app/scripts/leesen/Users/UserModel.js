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
    App,
    _;



    _ = require('underscore');
    Backbone = require('backbone');

    App = App || { Users : {} , Book : {} };
    App.Users.View = require('UserView');
    App.Book.Collection = require('BookCollection');


    UsersModel = Backbone.Model.extend({
        initialize : function(options){
            Backbone.Model.prototype.initialize.call(this, options);
            var bookCollection = new App.Book.Collection(options.books);
            this.set('BookCollection',bookCollection);
        }
    });

    return UsersModel;

});