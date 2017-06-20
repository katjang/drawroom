import CanvasSetting from "./CanvasSetting";
import ColorSelector from"./ColorSelector";

class ColorSetting extends CanvasSetting{
    constructor(model){
        super(model);
        this.name = 'Color';
        new ColorSelector({el: '#colorSelector', model: this.model});
    }
    onClick(e){
        App.events.trigger("toggleColorSelector");
    }
}
export default ColorSetting;
