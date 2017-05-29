import DataStreamHandler from "../../DataStreamHandler";
import HelpFunctions from "../../HelpFunctions";
import {View} from "backbone";

const DrawCanvas = View.extend({
    events: {
        "mousedown": "canvasMouseDownHandler",
        "mouseup": "canvasMouseUpHandler",
        "mousemove": "canvasMouseMoveHandler",
        "contextmenu": "canvasContextMenu"
    },
    initialize: function () {
        let room = window.location.href.slice(window.location.href.search(/[^\/]+$/));
        DataStreamHandler.joinRoom(room);
        App.events.on('updatePixels', (e) => this.updateNewPixels(e));
        App.events.on("canvasRedraw", () => this.canvasRedraw());

        this.$el.bind('mousewheel DOMMouseScroll', (e) => this.canvasMouseScrollHandler(e));

        this.$el.attr('width', HelpFunctions.makeEven(this.$el.parent().width()));
        this.$el.attr('height', HelpFunctions.makeEven(this.$el.parent().height()));

        let ctx = this.el.getContext('2d');
        ctx.imageSmoothingEnabled = false;
    },
    updateNewPixels: function (pixels) {
        for (let i = 0; i < pixels.length; i++) {
            if (pixels[i].color == 0) {
                this.clearPixel(pixels[i].x, pixels[i].y);
            } else {
                this.fillPixel(pixels[i].x, pixels[i].y, pixels[i].color);
            }
            let newPixels = this.model.get("pixels");
            newPixels[pixels[i].x][pixels[i].y] = pixels[i].color;
            this.model.set("pixels", newPixels);
        }
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
    updatePixel: function (x, y, color) {
        let pixels = this.model.get("pixels");
        if (pixels[x][y] != color) {
            if (color != 0) {
                this.fillPixel(x, y, color);
                DataStreamHandler.addUpdatedPixel(x, y, color);
            } else {
                this.clearPixel(x, y);
                DataStreamHandler.addUpdatedPixel(x, y, 0);
            }
        }
        pixels[x][y] = color;
        this.model.set("pixels", pixels);
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
    clearCanvas: function () {
        let c = this.el;
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, this.$el.width(), this.$el.height());
        ctx.stroke();
        ctx.closePath();
    },
    inputToPixelIndex: function (e) {
        let position = this.model.get("position");
        let scale = this.model.get("scale");
        if (e.offsetX > position.x && e.offsetY > position.y &&
            e.offsetX < position.x + this.model.get("width") * scale &&
            e.offsetY < position.y + this.model.get("height") * scale) {
            return {
                x: Math.floor((e.offsetX - position.x) / scale),
                y: Math.floor((e.offsetY - position.y) / scale)
            };
        }
        return false;
    },
    setSelectedColor: function (color) {
        this.model.selectedColor = color;
    },
    canvasMouseMoveHandler: function (e) {
        if(this.model.get("draggingSecondary")){
            this.reposition(e.offsetX - this.model.get("lastMousePos").x, e.offsetY - this.model.get("lastMousePos").y);
            App.events.trigger("canvasRedraw");
        }else{
            App.events.trigger("canvasMouseMove", e);
        }
        this.model.set("lastMousePos", {x: e.offsetX, y: e.offsetY});
    },
    canvasMouseDownHandler(e) {
        this.model.set('draggingSecondary', false);
        if (e.button == 2) {
            this.model.set('draggingSecondary', true);
            return;
        }
        App.events.trigger("canvasMouseDown", e);
    },

    canvasMouseUpHandler: function (e) {
        this.model.set('dragging', false);
        this.model.set('draggingSecondary', false);
        if (e.button == 2) {
            return;
        }
        App.events.trigger("canvasMouseUp", e);
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
