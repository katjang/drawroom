import Tool from "./Tool";

const MoveOnly = Tool.extend({
    initialize: function () {
        this.name = 'Move';
        Tool.prototype.initialize.apply(this, arguments);
    },
    DragHandler: function (e) {
        this.model.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
        App.events.trigger("canvasRedraw");
    }
});
export default MoveOnly;