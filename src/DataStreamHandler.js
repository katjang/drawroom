class DataStreamHandler{
    constructor(){
        this.socket = socket;
        this.updatedPixels = [];
        this.socket.addEventListener('pullPixelsFromServer', (e) => this.handleServerPixels(e));
        this.socket.addEventListener('serverMessage', (e) => this.handleMessage(e, 'server'));
        this.socket.addEventListener('message', (e) => this.handleMessage(e, 'user'));
        this.socket.addEventListener('roomsList', (e) => this.handleRoomsList(e));
        document.addEventListener('unload', () => this.handleClosePage());
    }
    joinRoom(room){
        this.socket.emit('join', room);
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
    requestRoomsList(){
        this.socket.emit('requestRooms');
    }

    handleRoomsList(e){
        let map = new Map();
        Object.keys(e).forEach(key => {
            map.set(key, e[key]);
        });
        let event = new CustomEvent("updateRooms", {
            detail: {
                rooms: map
            }
        });
        document.dispatchEvent(event);
    }
    handleClosePage(){
        this.socket.emit('disconnect');
    }
}
export default (new DataStreamHandler);