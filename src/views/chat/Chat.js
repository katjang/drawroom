import DataStreamHandler from "../../DataStreamHandler";
import ChatInput from "./ChatInput";
import SendButton from "./SendButton";
import MessagesDisplay from "./Messages";
import {View} from "backbone";


const Chat = View.extend({
    initialize: function(){
        App.events.on('sendMessage', () => this.sendMessage());

        this.textInput = new ChatInput({el: '#chatInput'});
        new SendButton({el: '#sendMessage'});
        this.messages = new MessagesDisplay({el: '#messages'});
    },
    sendMessage :function() {
        let text = this.textInput.popData();
        if (text != '') {
            DataStreamHandler.sendMessage(text);
            this.messages.handleMessage({type: 'self', message: text});
        }
    }
});
export default Chat;