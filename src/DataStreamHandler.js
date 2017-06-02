class DataStreamHandler{
    constructor(){
        this.socket = io();
        this.socket.addEventListener('pullPixelsFromServer', (e) => this.handleServerPixels(e));
        this.socket.addEventListener('serverMessage', (e) => this.handleMessage(e, 'server'));
        this.socket.addEventListener('message', (e) => this.handleMessage(e, 'user'));
        this.socket.addEventListener('roomsList', (e) => this.handleRoomsList(e));
        this.socket.addEventListener('roomDetails', (e) => this.handleRoomDetail(e));
        this.socket.addEventListener('sendAllDataForNewUser', (e) => this.userRequestedToSendAllData(e));
        document.addEventListener('unload', () => this.handleClosePage());
    }
    joinRoom(room){
        this.socket.emit('join', room);
    }
    leaveRoom(){
        this.socket.emit('leave');
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
    sendPixels(newPixels, user){
        this.socket.emit('pushPixelsToServer', {pixels: newPixels, user: user});
    };
    userRequestedToSendAllData(e){
        App.events.trigger("sendAllDataToUser", e);
    }
    handleRoomsList(e){
        let map = new Map();
        Object.keys(e).forEach(key => {
            map.set(key, e[key]);
        });
        App.events.trigger("updateRooms", map);
    }
    handleRoomDetail(e){
        App.events.trigger("updateCurrentRoom", e);
    }
    handleClosePage(){
        this.socket.emit('disconnect');
    }
}
export default (new DataStreamHandler);