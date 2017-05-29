import {View} from "backbone";

const CanvasSetting = View.extend({
    initialize: function(){
        this.active = false;
        this.el = $('<div>', {class: 'setting'}).append($('<span>').text(this.name));
        this.el.attr('data-name', this.name)
    },
    onClick: function(e){
        this.active = !this.active;
    }
});
export default CanvasSetting;