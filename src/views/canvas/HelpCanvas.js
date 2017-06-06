import CanvasLayer from "./CanvasLayer";

const HelpCanvas = CanvasLayer.extend({
    initialize: function () {
        CanvasLayer.prototype.initialize.apply(this, arguments);
        this.listenTo(this.model, 'change:drawHelpLines', this.canvasRedraw);
        App.events.on("canvasRedraw", () => this.canvasRedraw());
    },
    canvasRedraw: function () {
        this.clearCanvas();
        this.drawOutlining();
        if(this.model.get("drawHelpLines")){
            this.drawHelpLines();
        }
    },
    drawOutlining: function () {
        let c = this.el;
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.model.get("position").x + 0.5, this.model.get("position").y + 0.5, this.model.get("width") * this.model.get("scale"), this.model.get("height") * this.model.get("scale"));
        ctx.stroke();
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
    drawHelpLines() {
        let ctx = this.el.getContext("2d");
        let scale = this.model.get("scale");
        let position = this.model.get("position");
    ctx.strokeStyle = "#000000";
        ctx.beginPath();
        for (let i = 1; i < this.model.get("width"); i++) {
            ctx.moveTo(position.x + i * scale + 0.5, position.y + 0.5);
            ctx.lineTo(position.x + i * scale + 0.5, position.y + this.model.get("height") * scale + 0.5);
        }
        for (let j = 1; j < this.model.get("height"); j++) {
            ctx.moveTo(position.x + 0.5, position.y + j * scale + 0.5);
            ctx.lineTo(position.x + this.model.get("width") * scale + 0.5, position.y + j * scale + 0.5);
        }
        ctx.stroke();
        ctx.closePath();
    ctx.beginPath();
        ctx.strokeStyle = "#FF00FF";
        ctx.moveTo(position.x + Math.floor(this.model.get("width") /2) * scale + 0.5, position.y + 0.5);
        ctx.lineTo(position.x + Math.floor(this.model.get("width") /2) * scale + 0.5, position.y + this.model.get("height") * scale + 0.5);
        ctx.moveTo(position.x + 0.5, position.y + Math.floor(this.model.get("height") /2) * scale + 0.5);
        ctx.lineTo(position.x + this.model.get("width") * scale + 0.5, position.y + Math.floor(this.model.get("height") /2) * scale + 0.5);
        ctx.stroke();
    ctx.closePath();
},
});

export default HelpCanvas;
