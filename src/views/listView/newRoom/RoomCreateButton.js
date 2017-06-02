import {View} from "backbone";

const RoomCreateButton = View.extend({
    events: {
        'click': 'clickHandler'
    },
    clickHandler: function(){
        App.events.trigger('createNewRoom');
    }
});
export default RoomCreateButton
