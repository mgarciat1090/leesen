/*global define */
/* User View */

/**
 * User View
 * @namespace app
 */


define(function (require) {
    'use strict';
    var UsersView,
    BookCollectionView,
    App,
    Backbone,
    Templates,
    _;


        Templates = require('Templates');
        _ = require('underscore');
        Backbone = require('backbone');

        BookCollectionView = require('BookCollectionView');

        UsersView = Backbone.View.extend({
            tagName : "div",
            template : Templates.UserView,
            sidebarTemplate : Templates.SideBar,
            initialize : function(options){
                Backbone.View.prototype.initialize.call(this, options);
                _.bindAll(
                this,
                'render',
                'renderProfile',
                'renderSidebar',
                'renderBooks'
                );
                this.model.on('change',this.render,this);
            },
            render : function(){
                this.renderProfile();
                this.renderBooks();
                this.renderSidebar();
                return this;
            },
            renderProfile : function(){
                this.$el.append(this.template(this.model.toJSON()));
            },
            renderSidebar : function(){
                $('#side').html(this.sidebarTemplate(this.model.toJSON()));
            },
            renderBooks : function(){
                this.bookCollectionView = new BookCollectionView({ collection : this.model.get('BookCollection') } );
                this.el.appendChild(this.bookCollectionView.render().el);
            }
        });



    return UsersView;
});