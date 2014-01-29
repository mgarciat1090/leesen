/*global define */
/* Book Model */

/**
 * book model
 * @namespace app
 */


define(function (require) {
    'use strict';
    var BookModel,
    Backbone,
    App,
    _;



    _ = require('underscore');
    Backbone = require('backbone');

    App = App || { Users : {} };


    BookModel = Backbone.Model.extend({
        initialize : function(options){
            Backbone.Model.prototype.initialize.call(this, options);
        }
    });

    return BookModel;

});