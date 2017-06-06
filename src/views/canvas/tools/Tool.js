import {View} from "backbone";

const Tool = View.extend({
    initialize: function () {
        this.$el = $('<div>', {class: 'tool'}).append($('<span>').text(this.name));
        this.$el.attr('data-name', this.name);
        this.el = this.$el[0];
    },
    onClick: function (e) {
        this.$el.addClass('selected-tool');
    },
    DragHandler: function (e) {

    },
    MouseDownHandler: function (e) {
        this.DragHandler(e);
    },
    MouseUpHandler: function(e) {

    },
    MouseMoveHandler: function(e){

    }
});
export default Tool;