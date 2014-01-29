/*global define */
/* Book Collection */

/**
 * Book Collection
 * @namespace app
 */


define(function (require) {
    'use strict';
    var BookCollection,
    App,
    Backbone,
    Templates,
    _;

    App = App || {};
    App.Books = {};
    App.Books.Model = require('BookModel');


        Templates = require('Templates');
        _ = require('underscore');
        Backbone = require('backbone');

        BookCollection = Backbone.Collection.extend({
            model : App.Books.Model,
            initialize : function(options){

            }
        });



    return BookCollection;
});