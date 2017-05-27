import Pencil from "./Pencil";
import Eraser from "./Eraser";

class Toolbar {
    constructor(canvas) {
        this.el = $('#toolbar');
        this.tools = {};

        let pencil = new Pencil(canvas);
        let eraser = new Eraser(canvas);

        this.tools[pencil.name] = pencil;
        this.tools[eraser.name] = eraser;

        for (let tool in this.tools) {
            this.el.append(this.tools[tool].el);
        }
        this.selectTool(this.tools['pencil']);

        this.el[0].addEventListener('click', (e) => this.handleClick(e));
        document.addEventListener('canvasMouseMove', (e) => this.selectedTool.canvasMouseMoveHandler(e));
        document.addEventListener('canvasMouseDown', (e) => this.selectedTool.canvasMouseDownHandler(e));
        document.addEventListener('canvasMouseUp', (e) => this.selectedTool.canvasMouseUpHandler(e));
    }

    handleClick(e) {
        let target = $(e.target).hasClass('tool') ? $(e.target) : ($(e.target).parents('.tool').length) ? $(e.target).parents('.tool') : false;
        if (target) {
            let tool = this.tools[target.attr('data-name').replace('data-', '')];
            this.selectTool(tool);
        }
    }

    selectTool(tool) {
        this.selectedTool = tool;
        for (let tool in this.tools) {
            this.tools[tool].el.removeClass('selected-tool');
        }
        this.selectedTool.onClick();
    }
}
export default Toolbar;