import {View} from "backbone";
import DataStreamHandler from "./../../DataStreamHandler";
import PageHandler from "./../../PageHandler";

const NameInput = View.extend({
    events: {
        'keydown': 'keyHandler'
    },
    initialize(){
        App.events.on('selectName', () => this.selectName());
    },
    keyHandler: function(e){
        if(e.keyCode == 13){
            this.selectName();
        }
    },
    selectName(){
        DataStreamHandler.sendName(this.popData());
        PageHandler.goto('list');
    },
    popData: function(){
        let tmp = this.$el.val();
        this.$el.val('');
        return tmp;
    }
});
export default NameInput

