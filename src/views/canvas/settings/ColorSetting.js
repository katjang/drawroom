import CanvasSetting from "./CanvasSetting";
import ColorSelector from"./ColorSelector";

const ColorSetting = CanvasSetting.extend({
    initialize: function(){
        this.name = 'Color';
        CanvasSetting.prototype.initialize.apply(this, arguments);
        new ColorSelector({el: '#colorSelector', model: this.model});
    },

    onClick: function(e){
        App.events.trigger("toggleColorSelector");
        this.el.toggleClass('selected-tool');
    }
});
export default ColorSetting;
