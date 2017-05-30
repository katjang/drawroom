import {View} from "backbone";
import PageHandler from "../../PageHandler";

const BackButton = View.extend({
    events: {
        'click': 'handleClick'
    },
    handleClick(){
        PageHandler.goto('List');
    }

});
export default BackButton;