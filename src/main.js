import DrawCanvas from "./views/room/DrawCanvas";
import Chat from "./views/room/Chat";
import Toolbar from "./views/room/Toolbar";
import SettingMenu from "./views/room/SettingMenu";

import CreateNewRoom from "./views/listView/createNewRoom";
import RoomList from "./views/listView/roomList";

(function(){
    let init = function(){
        try{
            let canvas = new DrawCanvas();
            new Chat();
            new Toolbar(canvas);
            new SettingMenu(canvas);
        }

        catch(e){
            new RoomList();
            new CreateNewRoom();
        }

    };
    init();
})();

