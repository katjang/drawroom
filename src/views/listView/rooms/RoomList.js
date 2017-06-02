import DataStreamHandler from "../../../DataStreamHandler";
import PageHandler from "../../../PageHandler"
import {View} from "backbone";

const RoomList = View.extend({
    events: {
        "click": "clickHandler"
    },
    initialize: function(){
        App.events.on('updateRooms', (e)=> this.updateRoomList(e));
    },
    clickHandler: function(e){
        let target = $(e.target).hasClass('room--list') ? $(e.target) : ($(e.target).parents('.room--list').length) ? $(e.target).parents('.room--list') : false;
        if (target) {
            PageHandler.goto('Room');
            DataStreamHandler.joinRoom(target.attr('data-name').replace('data-', ''));
        }
    },
    updateRoomList: function(rooms){
        this.$el.empty();
        let hide = true;
        for (let [name, room] of rooms.entries()) {
            if(!room.length)
                continue;
            let listItem = $('<div>', {class: 'room--list'}).append('<span>').text(name + ' ' + room.length);
            listItem.attr('data-name', name);
            this.$el.append(listItem);
            hide = false;
        }
        hide? this.$el.hide() : this.$el.show();
    }
});
export  default RoomList;
