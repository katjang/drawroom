import DataStreamHandler from "../../DataStreamHandler";
class RoomList {
    constructor(){
        this.el = $('.list-view');
        DataStreamHandler.requestRoomsList();
        this.el.on('click', this.joinRoom);
        document.addEventListener('updateRooms', (e)=> this.updateRoomList(e));
    }
    updateRoomList(e){
        let hide = true;
        for (let [name, room] of e.detail.rooms.entries()) {
            let listItem = $('<div>', {class: 'room--list'}).append('<span>').text(name + ' ' + room.length);
            listItem.attr('data-name', name);
            this.el.append(listItem);
            hide = false;
        }
        if(hide){
            this.el.hide();
        }
    }
    joinRoom(e){
        let target = $(e.target).hasClass('room--list') ? $(e.target) : ($(e.target).parents('.room--list').length) ? $(e.target).parents('.room--list') : false;
        if (target) {
            window.location = window.location.href + '/' + target.attr('data-name').replace('data-', '');
        }
    }
}
export  default RoomList;
