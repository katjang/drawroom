import DataStreamHandler from "../../DataStreamHandler";
import HelpFunctions from "../../HelpFunctions";
import CanvasInputHandler from "../../CanvasInputHandler";

class DrawCanvas {
    constructor() {
        let room = window.location.href.slice(window.location.href.search(/[^\/]+$/));
        DataStreamHandler.joinRoom(room);

        this.scale = 5;
        this.height = 100; // how many pixels on the Y axis
        this.width = 200; //  how many pixels on the x axis
        this.pixels = [];
        this.selectedColor = '#000000';
        this.dragging = false;
        for (let i = 0; i < this.width; i++) {
            this.pixels[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.pixels[i][j] = 0;
            }
        }
        document.addEventListener('updatePixels', (e) => this.updateNewPixels(e));
        document.addEventListener('canvasRedraw', () => this.canvasRedraw());
        document.addEventListener('canvasZoomIn', () => this.zoomIn());
        document.addEventListener('canvasZoomOut', () => this.zoomOut());
        document.addEventListener('canvasReposition', (e) => this.reposition(e));

        this.el = $('#drawWrapper');
        this.canvas = $('#canvas');
        this.helpCanvas = $('#helpCanvas');
        this.canvas.attr('width', HelpFunctions.makeEven(this.canvas.parent().width()));
        this.canvas.attr('height', HelpFunctions.makeEven(this.canvas.parent().height()));
        this.helpCanvas.attr('width', HelpFunctions.makeEven(this.canvas.parent().width()));
        this.helpCanvas.attr('height', HelpFunctions.makeEven(this.canvas.parent().height()));

        new CanvasInputHandler(this.canvas);

        this.position = {
            x: this.canvas.width() / 2 - this.width * this.scale / 2,
            y: this.canvas.height() / 2 - this.height * this.scale / 2
        };
        let ctx = this.canvas[0].getContext('2d');
        ctx.imageSmoothingEnabled = false;

        this.drawOutlining();
    };

    updateNewPixels(e) {
        for(let i = 0; i < e.detail.pixels.length; i ++){
            if(e.detail.pixels[i].color == 0){
                this.clearPixel(e.detail.pixels[i].x, e.detail.pixels[i].y);
            }else{
                this.fillPixel(e.detail.pixels[i].x, e.detail.pixels[i].y, e.detail.pixels[i].color, this.canvas);
            }
            this.pixels[e.detail.pixels[i].x][e.detail.pixels[i].y] = e.detail.pixels[i].color;
        }
    }
    canvasRedraw(){
        this.clearCanvas(this.canvas);
        this.clearCanvas(this.helpCanvas);

        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if(this.pixels[i][j] != 0){
                    this.fillPixel(i, j, this.pixels[i][j], this.canvas);
                }

            }
        }
        this.drawOutlining();
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
    zoomIn(){
        if (this.scale <= 20) {
            this.scale += 1;
            this.reposition(
                {
                    detail: {
                        relativeX: ( this.width * (this.scale-1) - this.width * this.scale) / 2,
                        relativeY:( this.height * (this.scale-1) - this.height * this.scale) / 2
                    }
                });
        }
    }
    zoomOut(){
        if(this.scale > 2){
            this.scale -= 1;
            this.reposition(
                {
                    detail: {
                        relativeX: ( this.width * (this.scale+1) - this.width * this.scale) / 2,
                        relativeY:( this.height * (this.scale+1) - this.height * this.scale) / 2
                    }
                });
        }
    }
    reposition(e){
        this.position.x += e.detail.relativeX;
        this.position.y += e.detail.relativeY;
    }
}

export default DrawCanvas;
