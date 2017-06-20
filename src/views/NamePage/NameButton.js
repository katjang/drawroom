import {View} from "backbone";

const NameButton = View.extend({
    events: {
        'click': 'clickHandler'
    },
    clickHandler: function(){
        App.events.trigger('selectName');
    }
});
export default NameButton
