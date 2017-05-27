import DrawCanvas from "./DrawCanvas";
import Chat from "./Chat";
import Toolbar from "./Toolbar";
import SettingMenu from "./SettingMenu";
(function(){
    let init = function(){
        let canvas = new DrawCanvas();
        new Chat();
        new Toolbar(canvas);
        new SettingMenu(canvas);
    };
    init();
})();

