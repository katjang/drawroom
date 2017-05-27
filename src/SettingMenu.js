import ColorSelector from "./ColorSelector";
import HelpLines from "./HelpLines";

class SettingMenu {
    constructor(canvas) {
        this.el = $('#settingmenu');
        this.settings = {};

        let color = new ColorSelector(canvas);
        let helpLines = new HelpLines(canvas);

        this.settings[color.name] = color;
        this.settings[helpLines.name] = helpLines;

        for (let setting in this.settings){
            this.el.append(this.settings[setting].el);
        }
        this.toggleSetting(this.settings[helpLines.name]);

        this.el[0].addEventListener('click', (e) => this.handleClick(e));
    }

    handleClick(e) {
        let target = $(e.target).hasClass('setting') ? $(e.target) : ($(e.target).parents('.setting').length) ? $(e.target).parents('.setting') : false;
        if (target) {
            let setting = this.settings[target.attr('data-name').replace('data-', '')];
            this.toggleSetting(setting);
        }
    }
    toggleSetting(setting){
        setting.onClick();
    }
}
export default SettingMenu;