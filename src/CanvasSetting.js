class CanvasSetting{
    constructor(canvas, name){
        this.name = name;
        this.canvas = canvas;
        this.active = false;
        this.el = $('<div>', {class: 'setting'}).append($('<span>').text(name));
        this.el.attr('data-name', this.name)
    }
    onClick(e){
        this.active = !this.active;
    }
}
export default CanvasSetting;