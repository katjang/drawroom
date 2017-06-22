import DataStreamHandler from "../../../DataStreamHandler";
import PageHandler from "../../../PageHandler"
import _ from "underscore";
import {View} from "backbone";

const RoomList = View.extend({
    events: {
        "click .room--list": "clickHandler"
    },
    initialize: function () {
        App.events.on('updateRooms', (e) => this.updateRoomList(e));

        _.templateSettings.variable = "rooms";
        this.template = _.template($('#roomList-template').html());
    },
    clickHandler: function (e) {
        PageHandler.goto('room');
        DataStreamHandler.joinRoom(e.currentTarget.dataset.name);
    },
    updateRoomList: function (rooms) {
        this.$el.html(this.template(rooms));
    }
});
export  default RoomList;
