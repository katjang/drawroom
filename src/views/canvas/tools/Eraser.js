import Tool from "./Tool";

class Eraser extends Tool{
    constructor(model){
        super(model);
        this.name = 'Eraser';
    };
    dragHandler(e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        let pixels = this.model.get("pixels");
        if (indices) {
            if(pixels[indices.x][indices.y] != 0)
            App.events.trigger("toolUpdatePixels", [{x: indices.x, y: indices.y, color: 0}]);
        }
    }
}
export default Eraser;