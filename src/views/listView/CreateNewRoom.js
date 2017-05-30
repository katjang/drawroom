import DataStreamHandler from "../../DataStreamHandler";
import PageHandler from "../../PageHandler";
class CreateNewRoom {
    constructor(){
        this.el = $('.create-new');
        $('input[type=button]', this.el).on('click', this.createRoom)
    }
    createRoom(){
        PageHandler.goto('Room');
        let roomInput = $('#roomName');
        DataStreamHandler.joinRoom(roomInput.val());
        roomInput.val('');
    }
}
export default CreateNewRoom
