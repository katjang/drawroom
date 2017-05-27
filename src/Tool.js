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
        this.holdingMouse = true;
        this.canvasMouseMoveHandler(e);
    };

    canvasMouseUpHandler(e) {
        this.holdingMouse = false;
    };
}
export default Tool;