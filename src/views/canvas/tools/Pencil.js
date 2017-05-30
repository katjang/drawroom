import Tool from "./Tool";

const Pencil = Tool.extend({
    initialize: function () {
        this.name = 'pencil';
        Tool.prototype.initialize.apply(this, arguments);
    },
    DragHandler: function (e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        let pixels = this.model.get("pixels");
        let selectedColor = this.model.get("selectedColor");
        if (indices) {
            if (pixels[indices.x][indices.y] != selectedColor) {
                App.events.trigger("toolUpdatePixels", [{
                    x: indices.x,
                    y: indices.y,
                    color: selectedColor
                }]);
            }
        }
    }
});
export default Pencil;