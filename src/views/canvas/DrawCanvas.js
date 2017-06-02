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
        App.events.on('sendAllDataToUser', (e) => this.sendAllDataToUser(e));
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
    sendAllDataToUser: function(data){
        let sendArray = [];
        let pixels = this.model.get("pixels");
        for (let i = 0; i < this.model.get("width"); i++) {
            for (let j = 0; j < this.model.get("height"); j++) {
                sendArray.push({
                    x: i,
                    y: j,
                    color: pixels[i][j]
                });
            }
        }
        DataStreamHandler.sendPixels(sendArray, data);
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

        // let pixels = this.model.get("pixels");
        // let newFormat = [];
        // for (let i = 0; i < this.model.get("width"); i++) {
        //     newFormat[i] = [];
        //     for (let j = 0; j < this.model.get("height"); j++) {
        //         newFormat[i][j] = pixels[i][j] ? 1 : 0;
        //     }
        // }
        // console.log(JSON.stringify(newFormat).replace(/\[/g, '{').replace(/]/g, '}'));
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
            this.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
            App.events.trigger("canvasRedraw");
        }else if(this.model.get("dragging")){
            App.events.trigger("toolMouseDrag", e);
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
        App.events.trigger("toolMouseDown", e);
    },

    canvasMouseUpHandler: function (e) {
        this.model.set('dragging', false);
        this.model.set('draggingSecondary', false);
        if (e.button == 2) {
            return;
        }
        App.events.trigger("toolMouseUp", e);
    },

    canvasMouseScrollHandler: function (event) {
        let scale = this.model.get("scale");
        let width = this.model.get("width");
        let height = this.model.get("height");
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            if (scale <= 20) {
                let newScale = scale + 1;
                this.model.set("scale", newScale);
                this.reposition(( width * (scale- 1) - width * scale) / 2,( height * (scale - 1) - height * scale) / 2);
            }
        } else {
            if (scale > 2) {
                let newScale = scale - 1;
                this.model.set("scale", newScale);
                this.reposition((width * (scale + 1) - width * scale) / 2,( height * (scale + 1) - height * scale)/ 2);
            }
        }
        App.events.trigger("canvasRedraw");
    },
    canvasContextMenu: function () {
        return false;
    },
    reposition(x, y)
    {
        let newPosition = {
            x: this.model.get("position").x + + x,
            y: this.model.get("position").y + + y
        };
        this.model.set("position", newPosition);

    }
});

export default DrawCanvas;
