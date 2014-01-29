/*global define */
/* User View */

/**
 * User View
 * @namespace app
 */


define(function (require) {
    'use strict';
    var UsersView,
    App,
    Backbone,
    Templates,
    _;


        Templates = require('../Templates');
        _ = require('underscore');
        Backbone = require('backbone');

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
                'renderSidebar'
                );
                //this.model.on('change',this.render,this);
            },
            render : function(){
                this.renderProfile();
                this.renderSidebar();
                this.el.innerHTML = this.template(this.model.toJSON());
                return this;
            },
            renderProfile : function(){


            },
            renderSidebar : function(){

            },
        });



    return UsersView;
});