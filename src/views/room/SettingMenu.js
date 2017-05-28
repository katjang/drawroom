import ColorSelector from "./ColorSelector";
import HelpLines from "./HelpLines";

class SettingMenu {
    constructor(canvas) {
        this.el = $('#settingmenu');
        this.settings = new Map();

        let color = new ColorSelector(canvas);
        let helpLines = new HelpLines(canvas);

        this.settings.set(color.name, color);
        this.settings.set(helpLines.name, helpLines);


        for (let setting of this.settings.values()) {
            this.el.append(setting.el);
        }
        this.toggleSetting(helpLines);

        this.el[0].addEventListener('click', (e) => this.handleClick(e));
    }

    handleClick(e) {
        let target = $(e.target).hasClass('setting') ? $(e.target) : ($(e.target).parents('.setting').length) ? $(e.target).parents('.setting') : false;
        if (target) {
            let setting = this.settings.get(target.attr('data-name').replace('data-', ''));
            this.toggleSetting(setting);
        }
    }
    toggleSetting(setting){
        setting.onClick();
    }
}
export default SettingMenu;