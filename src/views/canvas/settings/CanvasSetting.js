import {View} from "backbone";

const CanvasSetting = View.extend({
    initialize: function(){
        this.el = $('<div>', {class: 'setting'}).append($('<span>').text(this.name));
        this.el.attr('data-name', this.name);
    },
});
export default CanvasSetting;