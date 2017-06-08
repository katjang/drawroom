import {Model} from "backbone";

const Canvas = Model.extend({
    defaults: {
        scale: 5,
        height: 32, // how many pixels on the Y axis
        width: 32, //  how many pixels on the x axis
        pixels: [],
        selectedColor: '#000000',
        highlightHelpLineColor: "#FF0000",
        defaultHelpLineColor: "#000000",
        highLightColor: "#55DD55",
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
        App.events.on("changeDimensions", (e) => this.changeDimensions(e));
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
    },
    reposition(x, y)
    {
        let newPosition = {
            x: this.get("position").x + x,
            y: this.get("position").y + y
        };
        this.set("position", newPosition);
    },
    changeDimensions(data){
        let oldWidth = this.get("width");
        let oldHeight = this.get("height");
        let newPixels = [];
        let oldPixels = this.get("pixels");
        for (let i = 0; i < data.width; i++) {
            newPixels[i] = [];
            for (let j = 0; j < data.height; j++) {
                if(i < oldWidth && j < oldHeight){
                    newPixels[i][j] = oldPixels[i][j];
                }else{
                    newPixels[i][j] = 0;
                }
            }
        }
        this.set("pixels", newPixels);
        if(data.hasOwnProperty('width')){
            this.set("width", data.width);
        }
        if(data.hasOwnProperty('height')){
            this.set("height", data.height);
        }
    }
});
export default Canvas;