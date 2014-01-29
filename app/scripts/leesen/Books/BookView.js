/*global define */
/* Book View */

/**
 * Book View
 * @namespace app
 */


define(function (require) {
    'use strict';
    var BookView,
    App,
    Backbone,
    Templates,
    _;


        Templates = require('Templates');
        _ = require('underscore');
        Backbone = require('backbone');

        BookView = Backbone.View.extend({
            tagName : "div",
            template : Templates.BookView,
            initialize : function(options){
                Backbone.View.prototype.initialize.call(this, options);
                _.bindAll(
                this,
                'render'
                );
                this.model.on('change',this.render,this);
            },
            render : function(){
                this.el.innerHTML = this.template( { book : this.model.attributes });
                return this;
            }
        });



    return BookView;
});