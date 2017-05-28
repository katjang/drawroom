class CanvasInputHandler {
    constructor(canvas) {
        canvas.on('mousedown', (e) => this.canvasMouseDownHandler(e));
        canvas.on('mouseup', (e) => this.canvasMouseUpHandler(e));
        canvas.on('mousemove', (e) => this.canvasMouseMoveHandler(e));
        canvas.on('contextmenu', function () {
            return false;
        });
        canvas.bind('mousewheel DOMMouseScroll', (e) => this.canvasMouseScrollHandler(e));

        this.zoomInEvent = new CustomEvent("canvasZoomIn");
        this.zoomOutEvent = new CustomEvent("canvasZoomOut");
        this.redrawEvent = new CustomEvent("canvasRedraw");
        this.lastMousePos = {x:0, y:0};
        this.dragging = false;
    }

    canvasMouseMoveHandler(e) {
        if(!this.dragging){
            let event = new CustomEvent("canvasMouseMove", {
                detail: {
                    event: e
                }
            });
            document.dispatchEvent(event);
        }else{
            let event = new CustomEvent("canvasReposition", {
                detail: {
                    relativeX: e.offsetX - this.lastMousePos.x,
                    relativeY: e.offsetY - this.lastMousePos.y
                }
            });
            document.dispatchEvent(event);
            document.dispatchEvent(this.redrawEvent);
        }
        this.lastMousePos = {x: e.offsetX, y: e.offsetY};
    };

    canvasMouseDownHandler(e) {
        this.dragging = false;
        if(e.button == 2){
            this.dragging = true;
            return;
        }
        let event = new CustomEvent("canvasMouseDown", {
            detail: {
                event: e
            }
        });
        document.dispatchEvent(event);
    };

    canvasMouseUpHandler(e) {
        this.dragging = false;
        if(e.button == 2){
            return;

        }
        let event = new CustomEvent("canvasMouseUp", {
            detail: {
                event: e
            }
        });
        document.dispatchEvent(event);
    };

    canvasMouseScrollHandler(event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            document.dispatchEvent(this.zoomInEvent);
        } else {
            document.dispatchEvent(this.zoomOutEvent);
        }
        document.dispatchEvent(this.redrawEvent);
    }
}
export default CanvasInputHandler;