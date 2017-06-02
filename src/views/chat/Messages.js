import {View} from "backbone";

const Messages = View.extend({
    initialize: function(){
        App.events.on('receivedMessage', (e) => this.handleMessage(e));
    },
    handleMessage(e) {
        let message = e.message;
        let type = e.type;
        this.$el.append($('<div>').append($('<span>', {class: type == ('server'||'self') ? 'server-message' : ''}).text(message)));
        this.$el.scrollTop(this.$el.scrollHeight);
        if(type != 'self'){
            new Audio('https://www.freesound.org//data/previews/341/341868_6114721-lq.ogg').play();
        }
    }
});
export default Messages

