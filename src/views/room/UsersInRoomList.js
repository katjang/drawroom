import {View} from "backbone";
import _ from "underscore";

const RoomOverview = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change:users", this.updateDom);
        _.templateSettings.variable = "users";
        this.template = _.template($('#users-template').html());
    },
    updateDom: function(e, a){
        this.$el.html(this.template(a));
    }

});
export default RoomOverview;