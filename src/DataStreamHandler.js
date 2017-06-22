class DataStreamHandler{
    constructor(){
        this.socket = io();
        this.socket.addEventListener('pullPixelsFromServer', (e) => this.handleServerPixels(e));
        this.socket.addEventListener('serverMessage', (e) => this.handleMessage(e, 'server'));
        this.socket.addEventListener('message', (e) => this.handleMessage(e, 'user'));
        this.socket.addEventListener('roomsList', (e) => this.handleRoomsList(e));
        this.socket.addEventListener('roomDetails', (e) => this.handleRoomDetail(e));
        this.socket.addEventListener('sendAllDataForNewUser', (e) => this.userRequestedToSendAllData(e));
        this.socket.addEventListener('pullDimensions', (e) => this.handleNewDimensions(e));
        this.socket.addEventListener('pullCanvasData', (e) => this.handleInitData(e));
    }
    joinRoom(room){
        this.socket.emit('join', room);
    }
    leaveRoom(){
        this.socket.emit('leave');
    }
    sendName(name){
        this.socket.emit('setName', name);
    }
    sendMessage(message){
        this.socket.emit('message', message);
    }
    sendPixels(newPixels){
        this.socket.emit('pushPixelsToServer', {pixels: newPixels});
    }
    sendCanvasData(canvasData, user){
        this.socket.emit('pushCanvasDataToUser', {canvasData: canvasData, user: user});
    }
    sendDimensions(e){
        this.socket.emit('pushDimensions', e)
    }
    handleMessage(e, type){
        App.events.trigger("receivedMessage", {message: e['message'], user: e['user'], type: type});
    }
    handleServerPixels(e){
        App.events.trigger("updatePixels", e);
    }

    userRequestedToSendAllData(e){
        App.events.trigger("sendAllDataToUser", e);
    }
    handleRoomsList(e){
        App.events.trigger("updateRooms", e);
    }
    handleRoomDetail(e){
        App.events.trigger("updateCurrentRoom", e);
    }
    handleNewDimensions(e){
        App.events.trigger("changeDimensions", e);
    }
    handleInitData(e){
        App.events.trigger("initializeRoomCanvas", e);
    }
}
export default (new DataStreamHandler);