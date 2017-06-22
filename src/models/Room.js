import {Model} from "backbone";

const Room = Model.extend({
    defaults: {
        users: {},
    },
    name: '',
    initialize: function () {
        App.events.on("updateCurrentRoom", (e) => this.handleNewRoomData(e));
    },
    handleNewRoomData: function(e){
        this.set("users", e['users']);
        this.set("name", e['name']);
    }
});
export default Room;