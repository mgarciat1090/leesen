/*global define */
/* Book Collection View */

/**
 * Book Collection View
 * @namespace app
 */


define(function (require) {
    'use strict';
    var BookCollectionView,
    App,
    Backbone,
    Templates,
    _;


        Templates = require('Templates');
        _ = require('underscore');
        Backbone = require('backbone');

        App = App || {};
        App.Books = {};
        App.Books.BookView = require('BookView');


        BookCollectionView = Backbone.View.extend({
            tagName : "div",
            template : Templates.BookCollectionView,
            initialize : function(options){
                Backbone.View.prototype.initialize.call(this, options);
                _.bindAll(
                this,
                'render'
                );
                this.collection.on('change',this.render,this);
            },
            render : function(){
                this.el.innerHTML = this.template();
                this.collection.forEach(function(model){
                    this.$('#book_shelf').append(new App.Books.BookView({ model : model }).render().el);
                },this);
                return this;
            }
        });



    return BookCollectionView;
});