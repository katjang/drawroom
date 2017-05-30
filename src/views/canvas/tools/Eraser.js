import Tool from "./Tool";

const Eraser = Tool.extend({
    initialize: function () {
        this.name = 'eraser';
        Tool.prototype.initialize.apply(this, arguments);
    },
    DragHandler: function (e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        let pixels = this.model.get("pixels");
        if (indices) {
            if(pixels[indices.x][indices.y] != 0)
            App.events.trigger("toolUpdatePixels", [{x: indices.x, y: indices.y, color: 0}]);
        }
    }
});
export default Eraser;