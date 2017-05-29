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
        App.events.trigger("receivedMessage", {message: e, type: type});
    }
    handleServerPixels(e){
        App.events.trigger("updatePixels", e);
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
        App.events.trigger("updateRooms", map);
    }
    handleClosePage(){
        this.socket.emit('disconnect');
    }
}
export default (new DataStreamHandler);