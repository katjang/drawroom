import {View} from "backbone";

const RoomOverview = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change:users", this.updateDom);
    },
    updateDom: function(e, a){
        this.$el.empty();
        for (let i = 0; i < a.length; i ++) {
            this.$el.append($('<span>').text(a[i]));
        }
    }

});
export default RoomOverview;