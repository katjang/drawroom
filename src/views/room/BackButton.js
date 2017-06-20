import {View} from "backbone";
import PageHandler from "../../PageHandler";
import DataStreamHandler from "../../DataStreamHandler";

const BackButton = View.extend({
    events: {
        'click': 'handleClick'
    },
    handleClick(){
        DataStreamHandler.leaveRoom();
        App.events.trigger("leaveRoom");
        PageHandler.goto('list');
    }

});
export default BackButton;