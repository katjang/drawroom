import {View} from "backbone";

const Tool = View.extend({
    initialize: function () {
        this.el = $('<div>', {class: 'tool'}).append($('<span>').text(this.name));
        this.el.attr('data-name', this.name)
    },
    onClick: function (e) {
        this.el.addClass('selected-tool');
    },
    DragHandler: function (e) {

    },
    MouseDownHandler: function (e) {
        this.DragHandler(e);
    },
    MouseUpHandler: function(e) {
    }
});
export default Tool;