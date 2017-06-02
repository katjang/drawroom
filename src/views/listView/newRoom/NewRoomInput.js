import {View} from "backbone";
import PageHandler from "../../../PageHandler";
import DataStreamHandler from "../../../DataStreamHandler";

const NewRoomInput = View.extend({
    initialize : function(){
        App.events.on('createNewRoom', () => this.createRoom());
    },
    events: {
        'keydown': 'keyHandler'
    },
    keyHandler: function(e){
        if(e.keyCode == 13){
            this.createRoom();
        }
    },
    popData: function(){
        let tmp = this.$el.val();
        this.$el.val('');
        return tmp;
    },
    createRoom: function(){
        PageHandler.goto('Room');
        DataStreamHandler.joinRoom(this.popData());
    }
});
export default NewRoomInput
