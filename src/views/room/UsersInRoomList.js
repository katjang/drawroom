import {View} from "backbone";

const RoomOverview = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change:users", this.updateDom);
    },
    updateDom: function(e, a){
        this.$el.empty();
        for (let entry in a) {
            this.$el.append($('<span>').text(entry));
        }
    }

});
export default RoomOverview;