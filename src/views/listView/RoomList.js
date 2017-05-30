import DataStreamHandler from "../../DataStreamHandler";
import PageHandler from "../../PageHandler"
class RoomList {
    constructor(){
        this.el = $('.list-view');
        this.el.on('click', this.joinRoom);
        App.events.on('updateRooms', (e)=> this.updateRoomList(e));
    }
    updateRoomList(rooms){
        this.el.empty();
        let hide = true;
        for (let [name, room] of rooms.entries()) {
            if(!room.length)
                continue;
            let listItem = $('<div>', {class: 'room--list'}).append('<span>').text(name + ' ' + room.length);
            listItem.attr('data-name', name);
            this.el.append(listItem);
            hide = false;
        }
        if(hide){
            this.el.hide();
        }else{
            this.el.show();
        }
    }
    joinRoom(e){
        let target = $(e.target).hasClass('room--list') ? $(e.target) : ($(e.target).parents('.room--list').length) ? $(e.target).parents('.room--list') : false;
        if (target) {
            PageHandler.goto('Room');
            DataStreamHandler.joinRoom(target.attr('data-name').replace('data-', ''));
        }
    }
}
export  default RoomList;
