import $ from "jquery";
import "babel-polyfill";
import DrawCanvas from "./views/canvas/DrawCanvas";
import HelpCanvas from "./views/canvas/HelpCanvas";
import Chat from "./views/chat/Chat";
import Toolbar from "./views/canvas/tools/Toolbar";
import SettingMenu from "./views/canvas/settings/SettingMenu";
import RoomName from "./views/room/RoomName";
import BackButton from "./views/room/BackButton";
import UsersInRoomList from "./views/room/UsersInRoomList";
import RoomPage from "./views/Room";
import RoomListPage from "./views/RoomsPage";
import NamePage from "./views/Name";

import NameButton from "./views/NamePage/NameButton";
import NameInput from "./views/NamePage/NameInput";

import RoomCreateButton from "./views/listView/newRoom/RoomCreateButton";
import RoomList from "./views/listView/rooms/RoomList";
import NewRoomInput from "./views/listView/newRoom/NewRoomInput";
import {Events} from "backbone";
import _ from "underscore";
import Canvas from "./models/Canvas";
import Room from "./models/Room";
import PageHandler from "./PageHandler";

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        window.App.events = _.clone(Events);
        window.$ = $;
    };
    let init = function () {
        setGlobalVariables();

        //reason for not nesting all objects into pages is easier access to models.
        let roomPage = new RoomPage({el: '#Room-page'});
        let roomListPage = new RoomListPage({el: '#List-page'});
        let namePage = new NamePage({el: '#Name-page'});

        PageHandler.addPage(roomPage);
        PageHandler.addPage(roomListPage);
        PageHandler.addPage(namePage);

        let canvasModel = new Canvas();
        let canvas = new DrawCanvas({el: '#canvas', model: canvasModel});
        let helpCanvas = new HelpCanvas({el: '#helpCanvas', model: canvasModel});
        new SettingMenu({el: '#settingMenu', model: canvasModel});
        new Toolbar({el: '#toolbar', model: canvasModel});

        let room = new Room();
        new Chat();

        new RoomName({el: '#roomName', model: room});
        new BackButton({el: "#back-to-list"});
        new UsersInRoomList({el: "#users", model: room});

        new RoomList({el: '#list-view'});
        new RoomCreateButton({el: "#createNew"});
        new NewRoomInput({el: '#newRoomName'});

        new NameButton({el: '#sendName'});
        new NameInput({el: '#username'});

        PageHandler.goto(namePage.name);
    };
    window.addEventListener('load', init);
})();


