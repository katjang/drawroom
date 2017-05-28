import ToggleTool from "./CanvasSetting";

class HelpLines extends ToggleTool{
    constructor(canvas){
        super(canvas, 'Helplines');
        document.addEventListener('canvasRedraw', () => this.drawHelpLines());
    }
    onClick(e){
        this.el.toggleClass('selected-tool');
        this.active = !this.active;
        if(this.active){
            this.drawHelpLines();
        }else{
            this.removeHelpLines();
        }
    }
    drawHelpLines() {
        if(!this.active){
            return;
        }
        let c = this.canvas.helpCanvas[0];
        let ctx = c.getContext("2d");
        ctx.beginPath();
        for (let i = 1; i < this.canvas.width; i++) {
            ctx.moveTo(this.canvas.position.x + i * this.canvas.scale + 0.5, this.canvas.position.y + 0.5);
            ctx.lineTo(this.canvas.position.x + i * this.canvas.scale + 0.5, this.canvas.position.y + this.canvas.height * this.canvas.scale + 0.5);
        }
        for (let j = 1; j < this.canvas.height; j++) {
            ctx.moveTo(this.canvas.position.x + 0.5, this.canvas.position.y + j * this.canvas.scale + 0.5);
            ctx.lineTo(this.canvas.position.x + this.canvas.width * this.canvas.scale + 0.5, this.canvas.position.y + j * this.canvas.scale + 0.5);
        }
        ctx.stroke();
        ctx.closePath();
        // dit is echt lelijk moet ik misschien anders oplossen
    };
    removeHelpLines(){
        this.canvas.clearCanvas(this.canvas.helpCanvas);
        this.canvas.drawOutlining();
    }
    canvasMouseMoveHandler(e) {
        return;
    };

    canvasMouseDownHandler(e) {
        return;
    };

    canvasMouseUpHandler(e) {
        return;
    };
}
export default HelpLines;

