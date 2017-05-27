class DataStreamHandler{
    constructor(){
        this.socket = socket;
        this.updatedPixels = [];
        let room = window.location.href.slice(window.location.href.search(/[^\/]+$/));
        this.socket.emit('join', room);
        this.socket.addEventListener('pullPixelsFromServer', (e) => this.handleServerPixels(e));
        this.socket.addEventListener('serverMessage', (e) => this.handleMessage(e, 'server'));
        this.socket.addEventListener('message', (e) => this.handleMessage(e, 'user'))
    }
    handleMessage(e, type){
        let event = new CustomEvent("receivedMessage", {
            detail: {
                type: type,
                message: e
            }
        });
        document.dispatchEvent(event);
    }
    handleServerPixels(e){
        let event = new CustomEvent("updatePixels", {
            detail: {
                pixels: e
            }
        });
        document.dispatchEvent(event);
    }
    sendMessage(message){
        this.socket.emit('message', message);
    }
    addUpdatedPixel(x, y, color){
        this.updatedPixels.push({
            x: x,
            y: y,
            color: color
        });
        this.socket.emit('pushPixelsToServer', this.updatedPixels);
        this.updatedPixels = [];
    };
    createJSON(){

    }
    parseJSON(){

    }
}
export default (new DataStreamHandler);