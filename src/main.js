import DrawCanvas from "./views/canvas/DrawCanvas";
import HelpCanvas from "./views/canvas/HelpCanvas";
import Chat from "./views/chat/Chat";
import Toolbar from "./views/canvas/tools/Toolbar";
import SettingMenu from "./views/canvas/settings/SettingMenu";
import RoomName from "./views/room/RoomName";
import BackButton from "./views/room/BackButton";
import UsersInRoomList from "./views/room/UsersInRoomList";
import RoomPage from "./views/room";
import RoomListPage from "./views/roomList";
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
    };
    let init = function () {
        setGlobalVariables();
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

        //reason for not nesting all objects into pages is easier access to models.
        let roomPage = new RoomPage({el: '#Room-page'});
        let roomListPage = new RoomListPage({el: '#List-page'});
        let namePage = new NamePage({el: '#Name-page'});

        PageHandler.addPage(roomPage);
        PageHandler.addPage(roomListPage);
        PageHandler.addPage(namePage);

        PageHandler.goto(namePage.name);


        App.events.on('drawOnScreen', function(array){
            // delete this function before hand in;
            let pixels = canvasModel.get('pixels');
            let newPixels= [];
            if(array.length == canvasModel.get("width") * canvasModel.get("height")){
                for(let i = 0; i < array.length; i ++){
                    newPixels.push({
                        x: i % canvasModel.get("width"),
                        y: Math.floor(i / canvasModel.get("width")),
                        color: array[i] == "0"? 0 : array[i]
                    });
                }

                App.events.trigger("toolUpdatePixels", newPixels);
            }else{
                console.log('Nice try, je bent alleen vergeten de canvas te resizen!');
            }

        });
    };
    window.addEventListener('load', init);
})();


