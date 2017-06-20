import CanvasSetting from "./CanvasSetting";

class HelpLines extends CanvasSetting{
    constructor(model){
        super(model);
        this.name = 'Helplines';
    }
    onClick(){
        this.toggleFunction();
    }
    toggleFunction(){
        this.model.set("drawHelpLines", !this.model.get("drawHelpLines"));
    }
}
export default HelpLines;

