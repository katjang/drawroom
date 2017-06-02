import {View} from "backbone";

const SendButton = View.extend({
    events: {
        'click': 'clickHandler'
    },
    clickHandler: function(){
        App.events.trigger('sendMessage');
    }
});
export default SendButton
