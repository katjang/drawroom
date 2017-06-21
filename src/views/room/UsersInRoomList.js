import {View} from "backbone";
import _ from "underscore";

const RoomOverview = View.extend({
    initialize: function () {
        this.listenTo(this.model, "change:users", this.updateDom);
    },
    updateDom: function(e, a){
        _.templateSettings.variable = "users";
        let template = _.template($('#users-template').html());
        this.$el.html(template(a));
    }

});
export default RoomOverview;