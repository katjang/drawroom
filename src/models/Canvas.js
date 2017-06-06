import {Model} from "backbone";

const Canvas = Model.extend({
    defaults: {
        scale: 5,
        height: 5, // how many pixels on the Y axis
        width: 16, //  how many pixels on the x axis
        pixels: [],
        selectedColor: '#000000',
        drawHelpLines: false,
        dragging: false,
        draggingSecondary: false,
        lastMousePos: {
            x: 0,
            y: 0
        },
        position: {
            x: 0,
            y: 0
        }
    },
    initialize: function () {
        this.reset();
        App.events.on("leaveRoom", () => this.reset());
    },
    reset: function(){
        let pixels = [];
        for (let i = 0; i < this.get("width"); i++) {
            pixels[i] = [];
            for (let j = 0; j < this.get("height"); j++) {
                pixels[i][j] = 0;
            }
        }
        this.set("pixels", pixels);
    },
    inputToPixelIndex: function (offsetX, offsetY) {
        let position = this.get("position");
        let scale = this.get("scale");
        if (offsetX > position.x && offsetY > position.y &&
            offsetX < position.x + this.get("width") * scale &&
            offsetY < position.y + this.get("height") * scale) {
            return {
                x: Math.floor((offsetX - position.x) / scale),
                y: Math.floor((offsetY - position.y) / scale)
            };
        }
        return false;
    }
});
export default Canvas;