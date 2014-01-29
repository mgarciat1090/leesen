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

    App = App || {};
    App.Routers = {};
    App.Users = {};
    App.Users.Model = require('UserModel');
    App.Users.View = require('UserView');

    console.log(App);


    App.Routers.R1 = Backbone.Router.extend({
        routes : {
            '/*' : 'index'
        },
        index : function(){

            var CurrentUserModel = new App.Users.Model({
                name : 'Martin',
                lastname : 'García',
                books : [
                    { name : 'Cien años de soledad', img : 'cien.jpg'},
                    { name : 'psicomagia' , img : 'psicomagia.jpg'} ,
                    { name : 'metagenealogía' , img : 'meta.jpg' }
                ]
            });

            var CurrentUserView = new App.Users.View({
                model : CurrentUserModel
            });

            $('#main-wrapper').append(CurrentUserView.render().el);

        }
    });


    return App;
});