import Tool from "./Tool";

class Pencil extends Tool{
    constructor (model) {
        super(model);
        this.name = 'Pencil';
    }
    dragHandler (e) {
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
}
export default Pencil;