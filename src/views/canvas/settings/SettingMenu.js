import ColorSetting from "./ColorSetting";
import HelpLines from "./HelpLines";
import DimensionSetting from "./DimensionSetting";
import {View} from "backbone";
import _ from "underscore";

const SettingMenu = View.extend({
    events: {
        "click": "handleClick"
    },
    initialize: function(){
        this.settings = [];
        this.settings.push(new HelpLines(this.model));
        this.settings.push(new ColorSetting(this.model));

        _.templateSettings.variable = "settings";
        let template = _.template($('#settings-template').html());
        this.$el.html(template(this.settings));

        new DimensionSetting({model: this.model, el: "#width"});
        new DimensionSetting({model: this.model, el: "#height"});

        this.toggleSetting(0);
    },
    handleClick: function(e){
        let target = $(e.target).hasClass('setting') ? $(e.target) : ($(e.target).parents('.setting').length) ? $(e.target).parents('.setting') : false;
        if (target) {
            let index = target[0].dataset.index;
            this.toggleSetting(index);
        }
    },
    toggleSetting: function(index){
        $('.setting', this.el).eq(index).toggleClass('selected-tool');
        this.settings[index].onClick();
    }
});
export default SettingMenu;