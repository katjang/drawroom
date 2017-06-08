import {View} from "backbone";
import HelpFunctions from "../../../HelpFunctions";
import DataStreamHandler from "../../../DataStreamHandler";

const DimensionSetting = View.extend({
    events: {
        'change': 'changeHandler'
    },
    initialize(){
        this.$el.val(this.model.get(this.el.dataset.id));
        this.listenTo(this.model, "change:"+this.el.dataset.id, this.setValue);
    },
    changeHandler: function(){
        let newDimension = {};
        newDimension[this.el.dataset.id] = HelpFunctions.makeEven(this.$el.val());
        this.model.changeDimensions(newDimension);
        DataStreamHandler.sendDimensions(newDimension);
    },
    setValue: function(e, a){
        this.$el.val(a);
    }
});
export default DimensionSetting;

