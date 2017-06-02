import {View} from "backbone";
import BackButton from "./BackButton";

const RoomName = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change:name", this.updateName);
    },
    updateName: function(e, a){
        this.$el.text(a);
    }

});
export default RoomName;