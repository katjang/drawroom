import HelpFunctions from "../../HelpFunctions";
import {View} from "backbone";

const CanvasLayer = View.extend({
    initialize: function () {
        App.events.on('initializeroom', () => this.resize());
        window.addEventListener('resize', () => this.resize());
        App.events.on("canvasRedraw", () => this.canvasRedraw());
        this.listenTo(this.model, 'change:width', this.canvasRedraw);
        this.listenTo(this.model, 'change:height', this.canvasRedraw);
        let ctx = this.el.getContext('2d');
        ctx.imageSmoothingEnabled = false;
    },
    clearCanvas: function () {
        let ctx = this.el.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, this.$el.width(), this.$el.height());
        ctx.stroke();
        ctx.closePath();
    },
    resize: function(){
        this.$el.attr('width', HelpFunctions.makeEven(this.$el.parent().width()));
        this.$el.attr('height', HelpFunctions.makeEven(this.$el.parent().height()));
        this.canvasRedraw();
    }
});

export default CanvasLayer;
