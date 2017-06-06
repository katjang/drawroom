import Tool from "./Tool";

const Mirror = Tool.extend({
    initialize: function () {
        this.name = 'Mirror';
        Tool.prototype.initialize.apply(this, arguments);
    },
    MouseDownHandler: function (e) {
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        if (indices) {
            let mirroredHalf = (indices.x >= (this.model.get("width") / 2)) ? 1 : 0;
            let pixels = this.model.get("pixels");
            let width = this.model.get("width");
            let height = this.model.get("height");
            let newPixels = [];

            for (let i = (width / 2) * mirroredHalf; i < ((width/2) + (width/2) * mirroredHalf); i++) {
                for (let j = 0; j < height; j++) {
                    if (pixels[i][j] != 0) {
                        newPixels.push({x: (width - i-1), y: j, color: pixels[i][j]});
                    }
                }
            }
            App.events.trigger("toolUpdatePixels", newPixels);
        }
    },
    MouseMoveHandler: function(e){
        let indices = this.model.inputToPixelIndex(e.offsetX, e.offsetY);
        if (indices) {
            let mirroredHalf = (indices.x >= (this.model.get("width") / 2)) ? 1 : 0;
            App.events.trigger("drawHelpSquare", {
                x:mirroredHalf*(this.model.get("width") / 2),
                y:0,
                w: this.model.get("width") / 2,
                h: this.model.get("height"),
                color: this.model.get("highLightColor")
            });
        }else{
            App.events.trigger("redrawHelpCanvas");
        }
    }
});
export default Mirror;