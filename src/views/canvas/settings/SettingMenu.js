import ColorSelector from "./ColorSetting";
import HelpLines from "./HelpLines";
import DimensionSetting from "./DimensionSetting";
import {View} from "backbone";

const SettingMenu = View.extend({
    events: {
        "click": "handleClick"
    },
    initialize: function(){
        this.settings = new Map();
        let color = new ColorSelector({model: this.model});
        let helpLines = new HelpLines({model: this.model});

        new DimensionSetting({model: this.model, el: "#width"});
        new DimensionSetting({model: this.model, el: "#height"});

        this.settings.set(color.name, color);
        this.settings.set(helpLines.name, helpLines);

        for (let setting of this.settings.values()) {
            this.el.append(setting.el[0]);
        }
        this.toggleSetting(helpLines);
    },
    handleClick: function(e){
        let target = $(e.target).hasClass('setting') ? $(e.target) : ($(e.target).parents('.setting').length) ? $(e.target).parents('.setting') : false;
        if (target) {
            let setting = this.settings.get(target.attr('data-name').replace('data-', ''));
            this.toggleSetting(setting);
        }
    },
    toggleSetting: function(setting){
        setting.onClick();
    }
});
export default SettingMenu;