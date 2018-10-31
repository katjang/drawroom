import CanvasLayer from "./CanvasLayer";
import HelpFunctions from "../../HelpFunctions";

const HelpCanvas = CanvasLayer.extend({
    initialize: function () {
        CanvasLayer.prototype.initialize.apply(this, arguments);
        this.listenTo(this.model, 'change:drawHelpLines', this.canvasRedraw);
        App.events.on("redrawHelpCanvas", () => this.canvasRedraw());
        App.events.on("drawHelpSquare", (e) => this.drawSquare(e));
        App.events.on("drawHelpLine", (e) => this.drawLine(e));
    },
    canvasRedraw: function () {
        this.clearCanvas();
        this.drawOutlining();
        if (this.model.get("drawHelpLines")) {
            this.drawHelpLines();
        }
    },
    drawOutlining: function () {
        let ctx = this.el.getContext("2d");
        ctx.strokeStyle = this.model.get("highlightHelpLineColor");
        ctx.beginPath();
        ctx.rect(this.model.get("position").x + 0.5, this.model.get("position").y + 0.5, this.model.get("width") * this.model.get("scale"), this.model.get("height") * this.model.get("scale"));
        ctx.stroke();
        ctx.closePath();
    },
    clearCanvas: function () {
        let c = this.el;
        let ctx = c.getContext("2d");
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.clearRect(0, 0, this.$el.width(), this.$el.height());
        ctx.stroke();
        ctx.closePath();
    },
    drawHelpLines() {
        let ctx = this.el.getContext("2d");
        let scale = this.model.get("scale");
        let position = this.model.get("position");
        let width = this.model.get("width");
        let height = this.model.get("height");
        ctx.strokeStyle = this.model.get("defaultHelpLineColor");
        ctx.beginPath();
        for (let i = 1; i < width; i++) {
            ctx.moveTo(position.x + i * scale + 0.5, position.y + 0.5);
            ctx.lineTo(position.x + i * scale + 0.5, position.y + height * scale + 0.5);
        }
        for (let j = 1; j < height; j++) {
            ctx.moveTo(position.x + 0.5, position.y + j * scale + 0.5);
            ctx.lineTo(position.x + width * scale + 0.5, position.y + j * scale + 0.5);
        }
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = this.model.get("highlightHelpLineColor");
        ctx.moveTo(position.x + Math.floor(width / 2) * scale + 0.5, position.y + 0.5);
        ctx.lineTo(position.x + Math.floor(width / 2) * scale + 0.5, position.y + height * scale + 0.5);
        ctx.moveTo(position.x + 0.5, position.y + Math.floor(height / 2) * scale + 0.5);
        ctx.lineTo(position.x + width * scale + 0.5, position.y + Math.floor(height / 2) * scale + 0.5);
        ctx.stroke();
        ctx.closePath();
    },
    drawSquare: function(e){
        this.clearCanvas();
        let position = this.model.get("position");
        let scale = this.model.get("scale");
        let ctx = this.el.getContext("2d");
        ctx.fillStyle = e.color;
        ctx.beginPath();
        ctx.fillRect(position.x + e.x* scale,  position.y + e.y * scale, e.w * scale, e.h * scale);
        ctx.stroke();
        ctx.closePath();
        this.drawOutlining();
        if (this.model.get("drawHelpLines")) {
            this.drawHelpLines();
        }
    },
    drawLine: function(e) {
        this.clearCanvas();
        let position = this.model.get("position");
        let scale = this.model.get("scale");
        let ctx = this.el.getContext("2d");
        
        // The following code is an implementation of Bresenham's line algorithm
        ctx.beginPath();
        ctx.fillStyle = e.color;
        // call helpfunction to get array of 
        HelpFunctions.plotLine(e.start, e.end).forEach((vector) => {
            ctx.fillRect(position.x + vector.x * scale, position.y + vector.y * scale, scale, scale);
        });
        ctx.closePath();

        if (this.model.get("drawHelpLines")) {
            this.drawHelpLines();
        }
    }
});

export default HelpCanvas;
