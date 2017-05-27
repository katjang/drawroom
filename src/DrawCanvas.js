import DataStreamHandler from "./DataStreamHandler";
import Helpfunctions from "./HelpFunctions";

class DrawCanvas {
    constructor() {
        this.scale = 4;
        this.height = 100; // how many pixels on the Y axis
        this.width = 200; //  how many pixels on the x axis
        this.pixels = [];
        this.selectedColor = '#000000';
        this.holdingMouse = false;
        for (let i = 0; i < this.width; i++) {
            this.pixels[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.pixels[i][j] = 0;
            }
        }
        document.addEventListener('updatePixels', (e) => this.handleNewPixelData(e));

        this.el = $('#drawWrapper');
        this.canvas = $('#canvas');
        this.helpCanvas = $('#helpCanvas');
        this.canvas.attr('width', this.canvas.parent().width());
        this.canvas.attr('height', this.canvas.parent().height());
        this.helpCanvas.attr('width', this.canvas.parent().width());
        this.helpCanvas.attr('height', this.canvas.parent().height());

        this.canvas.on('mousedown', (e) => this.canvasMouseDownHandler(e));
        this.canvas.on('mouseup', (e) => this.canvasMouseUpHandler(e));
        this.canvas.on('mousemove', (e) => this.canvasMouseMoveHandler(e));
        this.canvas.on('contextmenu', function(){ return false; });
        this.position = {
            x: this.canvas.width() / 2 - this.width * this.scale / 2,
            y: this.canvas.height() / 2 - this.height * this.scale / 2
        };
        let ctx = this.canvas[0].getContext('2d');
        ctx.imageSmoothingEnabled = false;
        this.drawOutlining();
    };

    handleNewPixelData(e) {
        for(let i = 0; i < e.detail.pixels.length; i ++){
            if(e.detail.pixels[i].color == 0){
                this.clearPixel(e.detail.pixels[i].x, e.detail.pixels[i].y);
            }else{
                this.fillPixel(e.detail.pixels[i].x, e.detail.pixels[i].y, e.detail.pixels[i].color, this.canvas);
            }
            this.pixels[e.detail.pixels[i].x][e.detail.pixels[i].y] = e.detail.pixels[i].color;
        }
    }

    updatePixel(x, y, color) {
        if(this.pixels[x][y] != color){
            if(color != 0){
                this.fillPixel(x, y, color, this.canvas);
                DataStreamHandler.addUpdatedPixel(x, y, this.selectedColor);
            }else{
                this.clearPixel(x,y);
                DataStreamHandler.addUpdatedPixel(x, y, 0);
            }
        }
        this.pixels[x][y] = color;
    };
    drawOutlining(){
        let c = this.helpCanvas[0];
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.position.x + 0.5, this.position.y+ 0.5, this.width * this.scale, this.height * this.scale);
        ctx.stroke();
        ctx.closePath();
    }
    fillPixel(x, y, color, canvas) {
        let c = canvas[0];
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
        ctx.closePath();
    }
    clearPixel(x,y){
        let c = this.canvas[0];
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(this.position.x + x * this.scale, this.position.y + y * this.scale, this.scale, this.scale);
        ctx.closePath();
    }
    clearCanvas(canvas){
        let c = canvas[0];
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas.width(), canvas.height());
        ctx.stroke();
        ctx.closePath();
    }
    inputToPixelIndex(e) {
        if (e.offsetX > this.position.x && e.offsetY > this.position.y &&
            e.offsetX < this.position.x + this.width * this.scale &&
            e.offsetY < this.position.y + this.height * this.scale) {
            return {
                x: Math.floor((e.offsetX - this.position.x) / this.scale),
                y: Math.floor((e.offsetY - this.position.y) / this.scale)
            };
        }
        return false;
    };
    setSelectedColor(color){
        this.selectedColor = color;
    }

    canvasMouseMoveHandler(e) {
        let event = new CustomEvent("canvasMouseMove", {
            detail: {
                event: e
            }
        });
        document.dispatchEvent(event);
    };

    canvasMouseDownHandler(e) {
        let event = new CustomEvent("canvasMouseDown", {
            detail: {
                event: e
            }
        });
        document.dispatchEvent(event);
    };

    canvasMouseUpHandler(e) {
        let event = new CustomEvent("canvasMouseUp", {
            detail: {
                event: e
            }
        });
        document.dispatchEvent(event);
    };
}

export default DrawCanvas;
