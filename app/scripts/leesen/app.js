/*global define */
/* exported App */

/**
 * app bootstrap
 * @namespace app
 */


define(function (require) {
    'use strict';
    var App,
    Backbone,
    user,
    _;

    _ = require('underscore');
    Backbone = require('backbone');


    require('./Users/UserView');

    App = App || {};
    App.Routers = {};
    App.Users = {};
    App.Users.Model = require('./Users/UserModel');
    App.Users.View = require('./Users/UserView');

    console.log(App);

    (function(App){
        App.Routers.R1 = Backbone.Router.extend({
            routes : {
                '/*' : 'index'
            },
            index : function(){
                var CurrentUserModel = new App.Users.Model({
                    name : 'Martin',
                    lastname : 'García',
                    books : [ 'Cien años de soledad', 'psicomagia', 'metagenealogía' ]
                });

                console.log(CurrentUserModel);

                var CurrentUserView = new App.Users.View({
                  model : CurrentUserModel
                });

                $('#main-wrapper').append(CurrentUserView.render().el);
                console.log('rendered');
            }
        });

    })(App);

    return App;
});