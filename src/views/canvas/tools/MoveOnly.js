import Tool from "./Tool";

class MoveOnly extends Tool{
    constructor(model) {
        super(model);
        this.name = 'Move';
    }
    dragHandler (e) {
        this.model.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
        App.events.trigger("canvasRedraw");
    }
}
export default MoveOnly;