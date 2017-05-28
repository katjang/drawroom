class Tool {
    constructor(canvas, name){
        this.canvas = canvas;
        this.name = name;
        this.el = $('<div>', {class: 'tool'}).append($('<span>').text(name));
        this.el.attr('data-name', this.name);
    }
    onClick(e){
        this.el.addClass('selected-tool');
    }
    canvasMouseMoveHandler(e) {
        return;
    };

    canvasMouseDownHandler(e) {
        this.dragging = true;
        this.canvasMouseMoveHandler(e);
    };

    canvasMouseUpHandler(e) {
        this.dragging = false;
    };
}
export default Tool;