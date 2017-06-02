import {View} from "backbone";

const ChatInput = View.extend({
    events: {
        'keydown': 'keyHandler'
    },
    keyHandler: function(e){
        if(e.keyCode == 13){
            App.events.trigger('sendMessage');
        }
    },
    popData: function(){
        let tmp = this.$el.val();
        this.$el.val('');
        return tmp;
    }
});
export default ChatInput

