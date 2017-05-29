import CanvasSetting from "./CanvasSetting";

const HelpLines = CanvasSetting.extend({
    initialize: function(){
        this.name = 'helplines';
        CanvasSetting.prototype.initialize.apply(this, arguments);
    },
    onClick: function(){
        this.el.toggleClass('selected-tool');
        this.toggleFunction();
    },
    toggleFunction: function(){
        this.model.set("drawHelpLines", !this.model.get("drawHelpLines"));
    }
});
export default HelpLines;

