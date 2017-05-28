import Tool from "./Tool";

class Eraser extends Tool{
    constructor(canvas){
        super(canvas, 'eraser');
    }
    canvasMouseMoveHandler(e) {
        if (this.dragging) {
            let indices = this.canvas.inputToPixelIndex(e.detail.event);
            if(indices){
                this.canvas.updatePixel(indices.x, indices.y, 0);
            }
        }
    };
}
export default Eraser;