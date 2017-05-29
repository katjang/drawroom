import DrawCanvas from "./views/canvas/DrawCanvas";
import HelpCanvas from "./views/canvas/HelpCanvas";
import Chat from "./views/chat/Chat";
import Toolbar from "./views/canvas/tools/Toolbar";
import SettingMenu from "./views/canvas/settings/SettingMenu";

import CreateNewRoom from "./views/listView/createNewRoom";
import RoomList from "./views/listView/roomList";
import {Events} from "backbone";
import _ from "underscore";
import Canvas from "./models/Canvas";

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        window.App.events = _.clone(Events);
    };
    let init = function () {
        setGlobalVariables();
        let canvasModel = new Canvas();
        let canvas = new DrawCanvas({el: '#canvas', model: canvasModel});
        let helpCanvas = new HelpCanvas({el: '#helpCanvas', model: canvasModel});
        new SettingMenu({el: '#settingmenu', model: canvasModel});
        new Chat();
        new Toolbar(canvas);

        new RoomList();
        new CreateNewRoom();

    };
    window.addEventListener('load', init);
})();

