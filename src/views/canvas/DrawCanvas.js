import DataStreamHandler from "../../DataStreamHandler";
import CanvasLayer from "./CanvasLayer";
const DrawCanvas = CanvasLayer.extend({
    events: {
        "mousedown": "canvasMouseDownHandler",
        "mouseup": "canvasMouseUpHandler",
        "mousemove": "canvasMouseMoveHandler",
        "contextmenu": "canvasContextMenu"
    },
    initialize: function () {
        CanvasLayer.prototype.initialize.apply(this, arguments);
        App.events.on('updatePixels', (e) => this.updatePixels(e));
        App.events.on('toolUpdatePixels', (e) => this.toolUpdatePixels(e));
        this.$el.bind('mousewheel DOMMouseScroll', (e) => this.canvasMouseScrollHandler(e));
    },
    updatePixels: function (pixels) {
        for (let i = 0; i < pixels.length; i++) {
            let newPixels = this.model.get("pixels");
            newPixels[pixels[i].x][pixels[i].y] = pixels[i].color;
            this.model.set("pixels", newPixels);
            if (pixels[i].color == 0) {
                this.clearPixel(pixels[i].x, pixels[i].y);
            } else {
                this.fillPixel(pixels[i].x, pixels[i].y, pixels[i].color);
            }
        }
    },
    toolUpdatePixels: function (pixels) {
        this.updatePixels(pixels);
        DataStreamHandler.sendPixels(pixels);
    },

    canvasRedraw: function () {
        this.clearCanvas();
        let pixels = this.model.get("pixels");
        for (let i = 0; i < this.model.get("width"); i++) {
            for (let j = 0; j < this.model.get("height"); j++) {
                if (pixels[i][j] != 0) {
                    this.fillPixel(i, j, pixels[i][j]);
                }

            }
        }
    },
    fillPixel: function (x, y, color) {
        let c = this.el;
        let ctx = c.getContext("2d");
        let scale = this.model.get("scale");
        let position = this.model.get("position");

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(position.x + x * scale, position.y + y * scale, scale, scale);
        ctx.closePath();
    },
    clearPixel: function (x, y) {
        let c = this.el;
        let ctx = c.getContext("2d");
        let scale = this.model.get("scale");
        let position = this.model.get("position");
        ctx.beginPath();
        ctx.clearRect(position.x + x * this.model.get("scale"), position.y + y * scale, scale, scale);
        ctx.closePath();
    },
    canvasMouseMoveHandler: function (e) {
        if(this.model.get("draggingSecondary")){
            this.model.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
            App.events.trigger("canvasRedraw");
        }else if(this.model.get("dragging")){
            this.model.get("selectedTool").dragHandler(e);
        }else{
            this.model.get("selectedTool").mouseMoveHandler(e);
        }
        this.model.set("lastMousePos", {x: e.offsetX, y: e.offsetY});
    },
    canvasMouseDownHandler(e) {
        this.model.set('draggingSecondary', false);
        this.model.set('dragging', false);
        if (e.button == 2) {
            this.model.set('draggingSecondary', true);
            return;
        }
        this.model.set('dragging', true);
        this.model.get("selectedTool").mouseDownHandler(e);
    },

    canvasMouseUpHandler: function (e) {
        this.model.set('dragging', false);
        this.model.set('draggingSecondary', false);
        if (e.button == 2) {
            return;
        }
        this.model.get("selectedTool").mouseUpHandler(e);
    },

    canvasMouseScrollHandler: function (event) {
        let scale = this.model.get("scale");
        let width = this.model.get("width");
        let height = this.model.get("height");
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            if (scale <= 20) {
                let newScale = scale + 1;
                this.model.set("scale", newScale);
                this.model.reposition(( width * (scale- 1) - width * scale) / 2,( height * (scale - 1) - height * scale) / 2);
            }
        } else {
            if (scale > 2) {
                let newScale = scale - 1;
                this.model.set("scale", newScale);
                this.model.reposition((width * (scale + 1) - width * scale) / 2,( height * (scale + 1) - height * scale)/ 2);
            }
        }
        App.events.trigger("canvasRedraw");
    },
    canvasContextMenu: function () {
        // delete before handin!!
        let pixels = this.model.get("pixels");
        let newFormat = [];
        for (let i = 0; i < this.model.get("width"); i++) {
            for (let j = 0; j < this.model.get("height"); j++) {
                newFormat[i + j * this.model.get("width")] = pixels[i][j] ? 1 : 0;
            }
        }
        console.log("PROGMEM const byte name[] = " + JSON.stringify(newFormat).replace(/],\[/g, ',').replace('[', '{').replace(']', '}') + ";");
        return false;
    }
});

export default DrawCanvas;
