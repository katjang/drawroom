
import Tool from "./Tool";

class Pencil extends Tool{
    constructor(canvas){
        super(canvas, 'pencil');
    }
    canvasMouseMoveHandler(e) {
        if (this.dragging) {
            let indices = this.canvas.inputToPixelIndex(e.detail.event);
            if(indices){
                this.canvas.updatePixel(indices.x, indices.y, this.canvas.selectedColor);
            }
        }
    };
}
export default Pencil;
