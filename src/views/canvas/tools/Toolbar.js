import Pencil from "./Pencil";
import Eraser from "./Eraser";
import {View} from "backbone";

const Toolbar = View.extend({
    events: {
        "click": "handleClick"
    },
    initialize: function(){
        this.tools = new Map();

        let pencil = new Pencil({model: this.model});
        let eraser = new Eraser({model: this.model});

        this.tools.set(pencil.name, pencil);
        this.tools.set(eraser.name, eraser);

        for (let tool of this.tools.values()) {
            this.el.append(tool.el[0]);
        }
        this.selectTool(pencil);

        App.events.on('toolMouseDrag', (e) => this.selectedTool.DragHandler(e));
        App.events.on('toolMouseDown', (e) => this.selectedTool.MouseDownHandler(e));
        App.events.on('toolMouseUp', (e) => this.selectedTool.MouseUpHandler(e));
    },
    handleClick: function(e) {
        let target = $(e.target).hasClass('tool') ? $(e.target) : ($(e.target).parents('.tool').length) ? $(e.target).parents('.tool') : false;
        if (target) {
            let tool = this.tools.get(target.attr('data-name').replace('data-', ''));
            this.selectTool(tool);
        }
    },
    selectTool : function(tool) {
        this.selectedTool = tool;
        for (let tool of this.tools.values()) {
            tool.el.removeClass('selected-tool');
        }
        this.selectedTool.onClick();
    }
});
export default Toolbar;