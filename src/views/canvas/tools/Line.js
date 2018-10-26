import Tool from "./Tool";
import HelpFunctions from "../../../HelpFunctions";

class Line extends Tool{
    constructor (model) {
        super(model);
        this.name = 'Line';
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
            let newPixels = []; 
            HelpFunctions.plotLine(this.startIndices, indices).forEach((vector) => {
                newPixels.push({x: vector.x, y: vector.y, color: selectedColor});
            });
            App.events.trigger("toolUpdatePixels", newPixels);
        }
        this.startIndices = null;
        App.events.trigger("redrawHelpCanvas");
    }
    dragHandler (e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        if (indices && this.startIndices) {
            App.events.trigger("drawHelpLine", {
                start: {x: this.startIndices.x, y: this.startIndices.y},
                end: {x: indices.x, y: indices.y},
                color: this.model.get("highLightColor")
            });
        }
    }
}
export default Line;