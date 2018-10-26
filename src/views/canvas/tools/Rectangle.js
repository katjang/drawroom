import Tool from "./Tool";

class Rectangle extends Tool{
    constructor (model) {
        super(model);
        this.name = 'Rectangle';
        this.isMouseDown = false;
        this.startIndices = null;
    }
    mouseDownHandler(e) {
        this.startIndices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
    }
    mouseUpHandler(e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        let selectedColor = this.model.get("selectedColor");
        if (indices && this.startIndices) {
            let minX = Math.min(indices.x, this.startIndices.x);
            let maxX = Math.max(indices.x, this.startIndices.x);
            let minY = Math.min(indices.y, this.startIndices.y);
            let maxY = Math.max(indices.y, this.startIndices.y);

            let newPixels = [];
            for (let y = minY; y < maxY; y++) {
                for (let x = minX; x < maxX; x++) {
                    newPixels.push({x: x, y: y, color: selectedColor});
                }
            }
            App.events.trigger("toolUpdatePixels", newPixels);
        }
        this.startIndices = null;
        App.events.trigger("redrawHelpCanvas");
    }
    dragHandler (e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        if (indices && this.startIndices) {
            let minX = Math.min(indices.x, this.startIndices.x);
            let maxX = Math.max(indices.x, this.startIndices.x);
            let minY = Math.min(indices.y, this.startIndices.y);
            let maxY = Math.max(indices.y, this.startIndices.y);

            App.events.trigger("drawHelpSquare", {
                x: minX,
                y: minY,
                w: maxX - minX,
                h: maxY - minY,
                color: this.model.get("highLightColor")
            });
        }
    }
}
export default Rectangle;