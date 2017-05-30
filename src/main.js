import DrawCanvas from "./views/canvas/DrawCanvas";
import HelpCanvas from "./views/canvas/HelpCanvas";
import Chat from "./views/chat/Chat";
import Toolbar from "./views/canvas/tools/Toolbar";
import SettingMenu from "./views/canvas/settings/SettingMenu";
import RoomOverview from "./views/room/RoomOverview";

import CreateNewRoom from "./views/listView/CreateNewRoom";
import RoomList from "./views/listView/RoomList";
import {Events} from "backbone";
import _ from "underscore";
import Canvas from "./models/Canvas";
import Room from "./models/Room";
import PageHandler from "./PageHandler";

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
        new SettingMenu({el: '#settingMenu', model: canvasModel});
        new Chat();
        new Toolbar({el: '#toolbar', model: canvasModel});

        let room = new Room();
        new RoomOverview({el: '#roomOverview', model: room});
        new RoomList();
        new CreateNewRoom();
        PageHandler.goto('List');

    };
    window.addEventListener('load', init);
})();

