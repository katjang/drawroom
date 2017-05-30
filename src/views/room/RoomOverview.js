import {View} from "backbone";
import BackButton from "./BackButton";

const RoomOverview = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change", () => this.updateDom());
        new BackButton({el: "#back-to-list"});
    },
    updateDom: function(){
        $('.room-name', this.$el).text(this.model.get("name"));
    }

});
export default RoomOverview;