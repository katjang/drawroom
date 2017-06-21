import {View} from "backbone";
import _ from "underscore";

const Messages = View.extend({
    initialize: function(){
        App.events.on('receivedMessage', (e) => this.handleMessage(e));
    },
    handleMessage(e) {
        _.templateSettings.variable = "data";
        let template = _.template($('#message-template').html());
        this.$el.append(template(e));

        this.el.scrollTop = this.el.scrollHeight;
        if(e.type != 'self'){
            new Audio('https://www.freesound.org//data/previews/341/341868_6114721-lq.ogg').play();
        }
    }
});
export default Messages

